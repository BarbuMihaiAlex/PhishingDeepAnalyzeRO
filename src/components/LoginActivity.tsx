import React, { useState } from 'react';
import { ArrowLeft, AlertTriangle, Globe, Clock, Monitor, CheckCircle, XCircle } from 'lucide-react';
import { loginRecords } from '../data/loginRecords';

interface LoginActivityProps {
  identifiedIssue: boolean;
  onIdentifyIssue: () => void;
  onBackToDashboard: () => void;
  onProceedToMitigation: () => void;
  canProceed: boolean;
}

const LoginActivity: React.FC<LoginActivityProps> = ({ 
  identifiedIssue, 
  onIdentifyIssue, 
  onBackToDashboard, 
  onProceedToMitigation,
  canProceed
}) => {
  const [showHints, setShowHints] = useState(false);
  const [selectedLogin, setSelectedLogin] = useState<string | null>(null);

  const handleLoginSelect = (loginId: string) => {
    setSelectedLogin(loginId);
    
    // If they selected the suspicious login from Russia
    if (loginId === 'login-3') {
      onIdentifyIssue();
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
      <div className="bg-gray-700 p-4 flex items-center justify-between border-b border-gray-600">
        <div className="flex items-center">
          <button 
            onClick={onBackToDashboard}
            className="mr-4 p-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-lg font-semibold">Activitatea de Autentificare a Contului</h2>
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
          <h3 className="text-lg font-medium mb-3">Istoricul Recent al Autentificărilor - John Doe</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-4 py-3 text-left">Timestamp</th>
                  <th className="px-4 py-3 text-left">Adresă IP</th>
                  <th className="px-4 py-3 text-left">Locație</th>
                  <th className="px-4 py-3 text-left">Dispozitiv</th>
                  <th className="px-4 py-3 text-left">Stare</th>
                  <th className="px-4 py-3 text-left">Acțiune</th>
                </tr>
              </thead>
              <tbody>
                {loginRecords.map((login) => (
                  <tr 
                    key={login.id} 
                    className={`border-t border-gray-700 ${
                      login.suspicious ? 'bg-red-900/20' : ''
                    } ${
                      selectedLogin === login.id ? 'bg-blue-900/30' : ''
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-2 text-gray-400" />
                        {login.timestamp}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <Globe size={14} className="mr-2 text-gray-400" />
                        {login.ipAddress}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {login.location}
                      {login.suspicious && (
                        <span className="ml-2 text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded">
                          Suspect
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <Monitor size={14} className="mr-2 text-gray-400" />
                        {login.device}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {login.success ? (
                        <span className="flex items-center text-green-400">
                          <CheckCircle size={14} className="mr-1" />
                          Succes
                        </span>
                      ) : (
                        <span className="flex items-center text-red-400">
                          <XCircle size={14} className="mr-1" />
                          Eșuat
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleLoginSelect(login.id)}
                        className={`px-3 py-1 rounded text-xs ${
                          selectedLogin === login.id
                            ? 'bg-blue-600'
                            : 'bg-gray-700 hover:bg-gray-600'
                        }`}
                      >
                        Selectează
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {showHints && (
          <div className="bg-blue-900/30 border border-blue-800 p-4 rounded mb-6">
            <h3 className="font-medium text-blue-400 mb-2">Indicii de Analiză a Autentificărilor</h3>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Căutați autentificări din locații geografice neobișnuite</li>
              <li>Verificați dacă există autentificări care au avut loc la scurt timp după primirea e-mailului de phishing</li>
              <li>Notați orice autentificări de pe dispozitive sau browsere nerecunoscute</li>
              <li>Acordați atenție conexiunilor VPN/Proxy care ar putea ascunde locația atacatorului</li>
            </ul>
          </div>
        )}
        
        {selectedLogin === 'login-3' && identifiedIssue && (
          <div className="mb-6 bg-red-900/20 border border-red-700 rounded p-4">
            <div className="flex items-start">
              <AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-medium text-red-400">Detectat Acces Neautorizat!</h4>
                <p className="text-sm text-gray-300 mb-2">
                  Această autentificare din Rusia (IP: 185.159.82.43) a avut loc la 10:27 AM, la doar câteva minute după ce e-mailul de phishing a fost primit la 10:23 AM.
                </p>
                <p className="text-sm text-gray-300">
                  Adresa IP se potrivește cu serverul care a trimis e-mailul de phishing, confirmând că contul a fost compromis prin atacul de phishing.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400">
            {identifiedIssue 
              ? 'Acces neautorizat identificat!' 
              : 'Selectați autentificările suspecte pentru a investiga'}
          </div>
          <div>
            <button 
              onClick={onProceedToMitigation}
              className={`px-4 py-2 rounded font-medium ${
                canProceed 
                  ? 'bg-blue-600 hover:bg-blue-500' 
                  : 'bg-gray-600 cursor-not-allowed'
              }`}
              disabled={!canProceed}
            >
              Treci la Atenuare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginActivity;
