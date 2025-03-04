import React, { useState } from 'react';
import { ArrowLeft, AlertTriangle, Lock, Globe, ShieldAlert } from 'lucide-react';

interface PhishingSiteProps {
  identifiedFlags: string[];
  onIdentifyFlag: (flag: string) => void;
  onBackToEmail: () => void;
  onProceedToMitigation: () => void;
  canProceed: boolean;
}

const PhishingSite: React.FC<PhishingSiteProps> = ({ 
  identifiedFlags, 
  onIdentifyFlag, 
  onBackToEmail, 
  onProceedToMitigation,
  canProceed
}) => {
  const [showHints, setShowHints] = useState(false);
  const [enteredCredentials, setEnteredCredentials] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUrlClick = () => {
    onIdentifyFlag('fakeDomain');
  };

  const handleCertificateClick = () => {
    onIdentifyFlag('invalidCertificate');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      setEnteredCredentials(true);
      onIdentifyFlag('credentialsStolen');
    }
  };

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
          <h2 className="text-lg font-semibold">Analiza Site-ului de Phishing</h2>
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
          <div 
            className={`flex items-center p-2 bg-gray-700 rounded mb-4 ${
              identifiedFlags.includes('fakeDomain') ? 'border border-red-500' : ''
            }`}
            onClick={handleUrlClick}
            style={{ cursor: 'pointer' }}
          >
            <Globe className="text-gray-400 mr-2" size={16} />
            <span className="text-red-400">https://paypal-secure-login.com/verify-account</span>
            {identifiedFlags.includes('fakeDomain') && (
              <span className="ml-2 text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded">Domeniu Fals</span>
            )}
          </div>
          
          <div 
            className={`flex items-center p-2 bg-gray-700 rounded mb-4 ${
              identifiedFlags.includes('invalidCertificate') ? 'border border-red-500' : ''
            }`}
            onClick={handleCertificateClick}
            style={{ cursor: 'pointer' }}
          >
            <Lock className={`mr-2 ${identifiedFlags.includes('invalidCertificate') ? 'text-red-400' : 'text-gray-400'}`} size={16} />
            <span className={identifiedFlags.includes('invalidCertificate') ? 'text-red-400' : 'text-gray-400'}>
              Certificat: {identifiedFlags.includes('invalidCertificate') ? 'Invalid (Auto-semnat)' : 'Conexiune Securizată'}
            </span>
            {identifiedFlags.includes('invalidCertificate') && (
              <span className="ml-2 text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded">Certificat Invalid</span>
            )}
          </div>
          
          <div className="bg-white rounded-lg p-6 text-black">
            <div className="text-center mb-6">
              <img 
                src="https://unsplash.com/photos/a-blue-and-white-logo-on-a-white-background-QpD6l80tVzE" 
                alt="PayPal Logo" 
                className="h-12 mx-auto mb-4" 
              />
              <h2 className="text-xl font-bold text-[#0070ba]">Verificare Cont Necesară</h2>
              <p className="text-gray-600 mt-2">Vă rugăm să vă autentificați pentru a verifica informațiile contului dvs.</p>
            </div>
            
            {enteredCredentials ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                <div className="flex items-center">
                  <ShieldAlert className="mr-2" size={20} />
                  <strong className="font-bold">Parola dvs. a fost furată!</strong>
                </div>
                <span className="block sm:inline mt-1">
                  Acesta este un site de phishing simulat. Într-un atac real, datele dvs. de autentificare ar fi acum în mâinile atacatorilor.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail sau număr de telefon
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="E-mail sau număr de telefon"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Parola
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Parola"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Autentificare
                </button>
              </form>
            )}
            
            <div className="mt-4 text-center">
              <a href="#" className="text-[#0070ba] text-sm">Ați uitat parola?</a>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href="#" className="bg-[#E1F2FF] text-[#0070ba] font-bold py-2 px-4 rounded inline-block">
                  Înregistrează-te
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {showHints && (
          <div className="bg-blue-900/30 border border-blue-800 p-4 rounded mb-6">
            <h3 className="font-medium text-blue-400 mb-2">Indicii de Analiză a Site-ului de Phishing</h3>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Verificați adresa URL pentru greșeli de ortografie sau domenii neobișnuite</li>
              <li>Verificați starea certificatului SSL</li>
              <li>Căutați inconsecvențe vizuale în comparație cu site-ul legitim</li>
              <li>Testați ce se întâmplă dacă introduceți date de autentificare false</li>
            </ul>
          </div>
        )}
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Probleme Identificate pe Site-ul de Phishing</h3>
          <div className="space-y-2">
            {identifiedFlags.includes('fakeDomain') && (
              <div className="bg-red-900/20 border border-red-700 rounded p-3 flex items-start">
                <AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-medium">Detectat Domeniu Fals</h4>
                  <p className="text-sm text-gray-300">
                    Adresa URL folosește "paypal-secure-login.com" în loc de domeniul legitim "paypal.com"
                  </p>
                </div>
              </div>
            )}
            
            {identifiedFlags.includes('invalidCertificate') && (
              <div className="bg-red-900/20 border border-red-700 rounded p-3 flex items-start">
                <AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-medium">Certificat SSL Invalid</h4>
                  <p className="text-sm text-gray-300">
                    Site-ul folosește un certificat auto-semnat în loc de o autoritate de certificare de încredere
                  </p>
                </div>
              </div>
            )}
            
            {identifiedFlags.includes('credentialsStolen') && (
              <div className="bg-red-900/20 border border-red-700 rounded p-3 flex items-start">
                <AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-medium">Furt de Credențiale Confirmat</h4>
                  <p className="text-sm text-gray-300">
                    Site-ul de phishing este conceput pentru a fura datele de autentificare ale utilizatorilor și a le trimite atacatorului
                  </p>
                </div>
              </div>
            )}
            
            {identifiedFlags.length === 0 && (
              <div className="bg-gray-700 rounded p-3 text-center text-gray-400">
                Nicio problemă a site-ului de phishing identificată încă. Analizați elementele paginii pentru a identifica semnalele de alarmă.
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400">
            {identifiedFlags.length}/3 probleme ale site-ului de phishing identificate
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

export default PhishingSite;
