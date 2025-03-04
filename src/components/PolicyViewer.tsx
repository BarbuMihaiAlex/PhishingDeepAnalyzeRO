import React from 'react';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface PolicyViewerProps {
  onBackToDashboard: () => void;
}

const PolicyViewer: React.FC<PolicyViewerProps> = ({ onBackToDashboard }) => {
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
          <h2 className="text-lg font-semibold">Politica Companiei de Răspuns la Incidente de Phishing</h2>
        </div>
        <div className="flex items-center text-gray-400 text-sm">
          <FileText size={16} className="mr-1" />
          <span>Politica #SEC-2025-03</span>
        </div>
      </div>
      
      <div className="p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Politica de Răspuns la Incidente de Phishing</h3>
          <div className="flex items-center text-sm text-gray-400 mb-4">
            <span className="mr-4">Ultima Actualizare: 15 Mai 2025</span>
            <span>Aprobat de: Operațiunile de Securitate</span>
          </div>
          <p className="text-gray-300 mb-4">
            Această politică prezintă procedurile de răspuns la incidentele suspecte de phishing din cadrul organizației.
            Toți angajații sunt obligați să urmeze aceste instrucțiuni atunci când întâlnesc e-mailuri suspecte sau alte potențiale tentative de phishing.
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-blue-400">1. Identificarea Tentativelor de Phishing</h4>
          <p className="text-gray-300 mb-3">
            Angajații ar trebui să fie vigilenți pentru următorii indicatori comuni de phishing:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Adrese de e-mail suspecte ale expeditorului (în special cele care imită domenii legitime)</li>
            <li>Limbaj urgent sau amenințător care solicită acțiuni imediate</li>
            <li>Atașamente neașteptate sau solicitări de informații sensibile</li>
            <li>Linkuri către site-uri web suspecte sau necunoscute</li>
            <li>Gramatică slabă, greșeli de ortografie sau formatare neobișnuită</li>
            <li>Solicitări care ocolesc procedurile normale de securitate</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-blue-400">2. Proceduri de Răspuns Imediat</h4>
          <div className="bg-red-900/20 border border-red-700 rounded-lg p-4 mb-4">
            <div className="flex items-start">
              <AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <h5 className="font-medium text-red-400 mb-1">Dacă suspectați că ați primit un e-mail de phishing:</h5>
                <ol className="list-decimal list-inside text-gray-300 space-y-1">
                  <li>NU dați clic pe niciun link și NU deschideți niciun atașament</li>
                  <li>NU răspundeți expeditorului</li>
                  <li>NU ștergeți e-mailul (este o dovadă)</li>
                  <li>Raportați imediat e-mailul echipei de securitate</li>
                </ol>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mb-3">
            Pentru a raporta un e-mail suspect de phishing:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Redirecționați e-mailul ca atașament la <span className="text-blue-400">security@company.com</span></li>
            <li>Includeți "PHISHING" în linia de subiect</li>
            <li>Furnizați orice context suplimentar despre motivul pentru care l-ați considerat suspect</li>
          </ol>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-blue-400">3. Răspunsul Echipei de Securitate</h4>
          <p className="text-gray-300 mb-3">
            La primirea unui raport de phishing, echipa de securitate va:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Confirma primirea raportului în termen de 1 oră</li>
            <li>Analiza e-mailul pentru a confirma dacă este o tentativă de phishing</li>
            <li>Scanează pentru e-mailuri similare în întreaga organizație</li>
            <li>Blochează expeditorul și orice domenii/URL-uri malițioase</li>
            <li>Notifică departamentele afectate, dacă este necesar</li>
            <li>Documentează incidentul în sistemul de urmărire a securității</li>
          </ol>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-blue-400">4. Proceduri de Compromitere a Contului</h4>
          <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 mb-4">
            <div className="flex items-start">
              <Clock className="text-yellow-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <h5 className="font-medium text-yellow-400 mb-1">Dacă suspectați că contul dvs. a fost compromis:</h5>
                <ol className="list-decimal list-inside text-gray-300 space-y-1">
                  <li>Contactați imediat serviciul de asistență IT la ext. 5555</li>
                  <li>NU continuați să utilizați contul compromis</li>
                  <li>Fiți pregătit să schimbați toate parolele</li>
                </ol>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mb-3">
            Echipa de securitate va implementa următoarele măsuri pentru conturile compromise:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Resetare imediată a parolei și verificare a autentificării multi-factor</li>
            <li>Examinarea jurnalelor de activitate ale contului pentru acțiuni neautorizate</li>
            <li>Restricții temporare ale contului până la confirmarea securității</li>
            <li>Scanarea dispozitivelor pentru malware sau acces neautorizat</li>
            <li>Notificarea șefilor de departamente relevanți</li>
          </ol>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-blue-400">5. Răspunsul Organizațional</h4>
          <p className="text-gray-300 mb-3">
            Pentru campanii de phishing pe scară largă sau încălcări reușite, echipa de securitate va:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Emite o alertă la nivelul întregii organizații cu exemple și îndrumări</li>
            <li>Actualizează regulile de filtrare a e-mailurilor pentru a bloca tentative similare</li>
            <li>Organizează sesiuni de instruire privind gradul de conștientizare a securității</li>
            <li>Revizuiește și actualizează controalele de securitate, după caz</li>
            <li>Pregătește un raport de incident pentru conducere</li>
          </ol>
        </div>
        
        <div className="bg-green-900/20 border border-green-700 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
            <div>
              <h5 className="font-medium text-green-400 mb-1">Rețineți:</h5>
              <p className="text-gray-300">
                Raportarea e-mailurilor suspecte ajută la protejarea întregii organizații. Nu veți fi niciodată penalizat pentru raportarea unei tentative suspecte de phishing, chiar dacă se dovedește a fi legitimă.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyViewer;
