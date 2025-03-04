import React from 'react';
import { CheckCircle, Flag, Download, RefreshCw } from 'lucide-react';

interface CompletionScreenProps {
  showFlag: boolean;
  onRestartInvestigation: () => void;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ 
  showFlag,
  onRestartInvestigation
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto text-center p-8">
      <div className="mb-6">
        <CheckCircle className="text-green-400 mx-auto mb-4" size={64} />
        <h2 className="text-2xl font-bold mb-2">Investigație Finalizată!</h2>
        <p className="text-gray-300 mb-6">
          Ați identificat și atenuat cu succes atacul de phishing. Bravo!
        </p>
        
        {showFlag && (
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 mb-6 inline-block">
            <div className="flex items-center justify-center mb-2">
              <Flag className="text-blue-400 mr-2" size={20} />
              <h3 className="text-xl font-semibold text-blue-400">Capturează Steagul</h3>
            </div>
            <p className="text-xl font-mono bg-gray-900 p-3 rounded">
              FLAG{'{Inbox_Investigated_Phishing_Mitigated}'}
            </p>
          </div>
        )}
      </div>
      
      <div className="bg-gray-700 rounded-lg p-6 mb-6 text-left">
        <h3 className="text-lg font-semibold mb-3 text-blue-400">Concluzii Cheie</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Verificați întotdeauna adresa de e-mail și domeniul expeditorului pentru potențiale falsificări</li>
          <li>Verificați anteturile e-mailurilor pentru a identifica originea reală a mesajelor suspecte</li>
          <li>Fiți atenți la solicitările urgente care vă presează să acționați rapid</li>
          <li>Verificați adresele URL înainte de a face clic, trecând cu mouse-ul peste linkuri pentru a vedea destinația reală</li>
          <li>Nu introduceți niciodată datele de autentificare pe site-urile web accesate prin linkuri de e-mail fără a verifica legitimitatea</li>
          <li>Raportați imediat e-mailurile suspecte echipei de securitate</li>
        </ul>
      </div>
      
      <div className="bg-gray-700 rounded-lg p-6 mb-6 text-left">
        <h3 className="text-lg font-semibold mb-3 text-blue-400">Exemple Reale</h3>
        <p className="text-gray-300 mb-4">
          Această simulare s-a bazat pe tehnici reale de phishing utilizate în aceste atacuri notabile:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Campania de recoltare a credențialelor PayPal din 2023, care a afectat mii de utilizatori</li>
          <li>Atacuri spear-phishing țintite din 2024 împotriva instituțiilor financiare</li>
          <li>Atacuri recente de compromitere a e-mailurilor de afaceri (BEC) care vizează directorii executivi ai companiilor</li>
        </ul>
      </div>
      
      <div className="flex justify-center space-x-4">
        <button 
          className="flex items-center bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded font-medium"
          onClick={() => {}}
        >
          <Download size={18} className="mr-2" />
          Descarcă Raportul Incidentului
        </button>
        <button 
          className="flex items-center bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded font-medium"
          onClick={onRestartInvestigation}
        >
          <RefreshCw size={18} className="mr-2" />
          Restartază Investigația
        </button>
      </div>
    </div>
  );
};

export default CompletionScreen;
