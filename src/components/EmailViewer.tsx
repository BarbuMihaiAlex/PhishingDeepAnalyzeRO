import React, { useState } from 'react';
import { ArrowLeft, AlertTriangle, Paperclip, Code, ExternalLink } from 'lucide-react';
import { EmailType } from '../types';

interface EmailViewerProps {
  email: EmailType | null;
  identifiedIndicators: string[];
  onIdentifyIndicator: (indicator: string) => void;
  onViewHeaders: () => void;
  onViewPhishingSite: () => void;
  onBackToInbox: () => void;
  canProceed: boolean;
}

const EmailViewer: React.FC<EmailViewerProps> = ({ 
  email, 
  identifiedIndicators, 
  onIdentifyIndicator, 
  onViewHeaders, 
  onViewPhishingSite, 
  onBackToInbox,
  canProceed
}) => {
  const [showHints, setShowHints] = useState(false);

  if (!email) {
    return <div>Niciun e-mail selectat</div>;
  }

  const handleSpoofedDomainClick = () => {
    onIdentifyIndicator('spoofedDomain');
  };

  const handleSuspiciousLinkClick = () => {
    onIdentifyIndicator('suspiciousLink');
  };

  const handleAttachmentClick = () => {
    onIdentifyIndicator('suspiciousAttachment');
  };

  const handleUrgencyClick = () => {
    onIdentifyIndicator('urgencyTactics');
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
      <div className="bg-gray-700 p-4 flex items-center justify-between border-b border-gray-600">
        <div className="flex items-center">
          <button 
            onClick={onBackToInbox}
            className="mr-4 p-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-lg font-semibold">Vizualizator E-mail</h2>
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
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="mb-1">
                <span className="text-gray-400">De la: </span> 
                <span 
                  className={`font-medium ${identifiedIndicators.includes('spoofedDomain') ? 'line-through text-red-400' : ''}`}
                  onClick={handleSpoofedDomainClick}
                  style={{ cursor: 'pointer' }}
                >
                  {email.fromName} &lt;{email.from}&gt;
                </span>
                {identifiedIndicators.includes('spoofedDomain') && (
                  <span className="ml-2 text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded">Domeniu Falsificat</span>
                )}
              </div>
              <div className="mb-1">
                <span className="text-gray-400">Către: </span> 
                <span className="font-medium">{email.to}</span>
              </div>
              <div className="mb-1">
                <span className="text-gray-400">Subiect: </span>
                <span 
                  className={`font-medium ${identifiedIndicators.includes('urgencyTactics') ? 'text-red-400' : ''}`}
                  onClick={handleUrgencyClick}
                  style={{ cursor: 'pointer' }}
                >
                  {email.subject}
                </span>
                {identifiedIndicators.includes('urgencyTactics') && (
                  <span className="ml-2 text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded">Tactică de Urgență</span>
                )}
              </div>
              <div>
                <span className="text-gray-400">Data: </span>
                <span className="font-medium">{email.date}</span>
              </div>
            </div>
            <div>
              <button 
                onClick={onViewHeaders}
                className="flex items-center bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded text-sm"
              >
                <Code size={16} className="mr-2" />
                Vezi Anteturile
              </button>
            </div>
          </div>
          
          {email.hasAttachment && (
            <div 
              className={`mb-4 p-3 bg-gray-700 rounded flex items-center ${
                identifiedIndicators.includes('suspiciousAttachment') ? 'border border-red-500' : ''
              }`}
              onClick={handleAttachmentClick}
              style={{ cursor: 'pointer' }}
            >
              <Paperclip size={16} className="mr-2 text-gray-400" />
              <span>{email.attachmentName}</span>
              {identifiedIndicators.includes('suspiciousAttachment') && (
                <span className="ml-2 text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded">Atasament Suspect</span>
              )}
            </div>
          )}
          
          <div 
            className="email-body bg-white text-black p-4 rounded"
            dangerouslySetInnerHTML={{ __html: email.body }}
          />
          
          {email.isPhishing && (
            <div 
              id="phishing-link" 
              className={`mt-4 p-3 bg-gray-700 rounded flex items-center ${
                identifiedIndicators.includes('suspiciousLink') ? 'border border-red-500' : ''
              }`}
              onClick={handleSuspiciousLinkClick}
              style={{ cursor: 'pointer' }}
            >
              <ExternalLink size={16} className="mr-2 text-blue-400" />
              <span className="text-blue-400 underline">https://paypal-secure-login.com/verify-account</span>
              {identifiedIndicators.includes('suspiciousLink') && (
                <span className="ml-2 text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded">URL Suspect</span>
              )}
            </div>
          )}
        </div>
        
        {showHints && (
          <div className="bg-blue-900/30 border border-blue-800 p-4 rounded mb-6">
            <h3 className="font-medium text-blue-400 mb-2">Indicii de Investigare</h3>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Verificați cu atenție adresa de e-mail a expeditorului pentru greșeli de ortografie</li>
              <li>Examinați linkurile trecând cu mouse-ul peste ele (sau făcând clic în această simulare)</li>
              <li>Căutați limbajul de urgență care presează acțiunea rapidă</li>
              <li>Fiți suspicios față de atașamentele neașteptate</li>
            </ul>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400">
            {identifiedIndicators.length}/3 indicatori de phishing identificați
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={onViewHeaders}
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded font-medium"
            >
              Analizează Anteturile E-mailului
            </button>
            {email.isPhishing && (
              <button 
                onClick={onViewPhishingSite}
                className={`px-4 py-2 rounded font-medium ${
                  canProceed 
                    ? 'bg-blue-600 hover:bg-blue-500' 
                    : 'bg-gray-600 cursor-not-allowed'
                }`}
                disabled={!canProceed}
              >
                Analizează Site-ul de Phishing
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailViewer;
