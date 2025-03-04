import React, { useState } from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { EmailType } from '../types';

interface HeaderAnalyzerProps {
  email: EmailType | null;
  identifiedFlags: string[];
  onIdentifyFlag: (flag: string) => void;
  onBackToEmail: () => void;
  onProceedToLogs: () => void;
  canProceed: boolean;
}

const HeaderAnalyzer: React.FC<HeaderAnalyzerProps> = ({ 
  email, 
  identifiedFlags, 
  onIdentifyFlag, 
  onBackToEmail, 
  onProceedToLogs,
  canProceed
}) => {
  const [showHints, setShowHints] = useState(false);

  if (!email || !email.headers) {
    return <div>Nu există anteturi de e-mail disponibile</div>;
  }

  const handleReturnPathClick = () => {
    onIdentifyFlag('fakeReturnPath');
  };

  const handleReceivedFromClick = () => {
    onIdentifyFlag('suspiciousIP');
  };

  const handleAuthFailClick = () => {
    onIdentifyFlag('noAuthentication');
  };

  // Split headers into lines for better display
  const headerLines = email.headers.split('\n');

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
      <div className="bg-gray-700 p-4 flex items-center justify-between border-b border-gray-600">
        <div className="flex items-center">
          <button 
            onClick={onBackToEmail}
            className="mr-4 p-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-lg font-semibold">Analiza Antetului E-mailului</h2>
        </div>
        <div>
          <button 
            onClick={() => setShowHints(!showHints)}
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            {showHints ? 'Ascunde Indiciile' : 'Arată Indiciile'}
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Anteturile E-mailului Brut</h3>
          <div className="bg-gray-900 p-4 rounded font-mono text-sm overflow-x-auto">
            {headerLines.map((line, index) => {
              // Highlight suspicious elements
              const isReturnPath = line.includes('Return-Path:');
              const isReceivedFrom = line.includes('Received: from') && line.includes('attacker-controlled.com');
              const isAuthRelated = line.includes('X-Spam-Status');
              
              return (
                <div 
                  key={index} 
                  className={`${
                    (isReturnPath && identifiedFlags.includes('fakeReturnPath')) ? 'bg-red-900/30 border-l-4 border-red-500 pl-2' : 
                    (isReceivedFrom && identifiedFlags.includes('suspiciousIP')) ? 'bg-red-900/30 border-l-4 border-red-500 pl-2' : 
                    (isAuthRelated && identifiedFlags.includes('noAuthentication')) ? 'bg-red-900/30 border-l-4 border-red-500 pl-2' : ''
                  }`}
                  onClick={() => {
                    if (isReturnPath) handleReturnPathClick();
                    if (isReceivedFrom) handleReceivedFromClick();
                    if (isAuthRelated) handleAuthFailClick();
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {line}
                </div>
              );
            })}
          </div>
        </div>
        
        {showHints && (
          <div className="bg-blue-900/30 border border-blue-800 p-4 rounded mb-6">
            <h3 className="font-medium text-blue-400 mb-2">Indicii de Analiză a Antetului</h3>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Verificați Return-Path pentru nepotriviri cu adresa From</li>
              <li>Examinați lanțul Received-From pentru servere suspecte</li>
              <li>Căutați autentificare lipsă sau eșuată (SPF/DKIM)</li>
              <li>Notați orice origini geografice neobișnuite în adresele IP</li>
            </ul>
          </div>
        )}
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Probleme Identificate în Antet</h3>
          <div className="space-y-2">
            {identifiedFlags.includes('fakeReturnPath') && (
              <div className="bg-red-900/20 border border-red-700 rounded p-3 flex items-start">
                <AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-medium">Detectat Return-Path Fals</h4>
                  <p className="text-sm text-gray-300">
                    Return-Path (malicious@attacker-server.net) nu se potrivește cu domeniul expeditorului (paypa1.com)
                  </p>
                </div>
              </div>
            )}
            
            {identifiedFlags.includes('suspiciousIP') && (
              <div className="bg-red-900/20 border border-red-700 rounded p-3 flex items-start">
                <AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-medium">Origine Suspectă a Serverului</h4>
                  <p className="text-sm text-gray-300">
                    E-mailul a provenit de pe un server suspect (attacker-controlled.com) cu IP-ul 185.159.82.43
                  </p>
                </div>
              </div>
            )}
            
            {identifiedFlags.includes('noAuthentication') && (
              <div className="bg-red-900/20 border border-red-700 rounded p-3 flex items-start">
                <AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-medium">Autentificare E-mail Lipsă</h4>
                  <p className="text-sm text-gray-300">
                    Nu există autentificare SPF sau DKIM validă, permițând falsificarea expeditorului
                  </p>
                </div>
              </div>
            )}
            
            {identifiedFlags.length === 0 && (
              <div className="bg-gray-700 rounded p-3 text-center text-gray-400">
                Nicio problemă de antet identificată încă. Faceți clic pe elementele suspecte din antet pentru a le marca.
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400">
            {identifiedFlags.length}/2 probleme de antet identificate
          </div>
          <div>
            <button 
              onClick={onProceedToLogs}
              className={`px-4 py-2 rounded font-medium ${
                canProceed 
                  ? 'bg-blue-600 hover:bg-blue-500' 
                  : 'bg-gray-600 cursor-not-allowed'
              }`}
              disabled={!canProceed}
            >
              Verifică Activitatea de Autentificare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAnalyzer;
