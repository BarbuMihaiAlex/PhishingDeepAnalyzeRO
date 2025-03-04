import React from 'react';
import { Mail, Shield, AlertTriangle, FileText, Clock } from 'lucide-react';

interface DashboardProps {
  onOpenInbox: () => void;
  onOpenLogs: () => void;
  onOpenPolicy: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onOpenInbox, onOpenLogs, onOpenPolicy }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="mb-8 bg-red-900/30 border border-red-700 rounded-lg p-4 flex items-start">
        <AlertTriangle className="text-red-500 mr-4 flex-shrink-0 mt-1" size={24} />
        <div>
          <h2 className="text-xl font-bold text-red-400 mb-2">Activitate Suspectă Detectată</h2>
          <p className="text-gray-300 mb-4">
            Un angajat, John Doe (john.doe@company.com), a raportat un e-mail suspect. 
            În calitate de analist de securitate de serviciu, trebuie să investigați acest potențial incident de securitate.
          </p>
          <p className="text-gray-400 text-sm">
            Incident raportat: 15 Iunie 2025 - 11:15 AM EDT | Ticket #INC-2025-06-15-001
          </p>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4 text-blue-400">Opțiuni de Investigare:</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          className="bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg p-4 cursor-pointer"
          onClick={onOpenInbox}
        >
          <div className="flex items-center mb-3">
            <Mail className="text-blue-400 mr-2" size={20} />
            <h4 className="font-medium">Deschide Căsuța de E-mail</h4>
          </div>
          <p className="text-gray-400 text-sm">
            Inspectați căsuța de e-mail a lui John pentru a identifica mesajele suspecte și potențialele tentative de phishing.
          </p>
        </div>
        
        <div 
          className="bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg p-4 cursor-pointer"
          onClick={onOpenLogs}
        >
          <div className="flex items-center mb-3">
            <Clock className="text-blue-400 mr-2" size={20} />
            <h4 className="font-medium">Verifică Jurnalele de Autentificare ale Contului</h4>
          </div>
          <p className="text-gray-400 text-sm">
            Examinați activitatea de autentificare pentru contul lui John pentru a identifica orice tentative de acces neautorizat.
          </p>
        </div>
        
        <div 
          className="bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg p-4 cursor-pointer"
          onClick={onOpenPolicy}
        >
          <div className="flex items-center mb-3">
            <FileText className="text-blue-400 mr-2" size={20} />
            <h4 className="font-medium">Vizualizează Politica Anti-Phishing</h4>
          </div>
          <p className="text-gray-400 text-sm">
            Consultați politica de răspuns la incidente de phishing a companiei pentru procedurile adecvate de gestionare.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-blue-900/20 border border-blue-800 rounded-lg p-4">
        <div className="flex items-start">
          <Shield className="text-blue-400 mr-4 flex-shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-medium text-blue-400 mb-1">Ghid de Investigare</h3>
            <p className="text-gray-300 text-sm mb-2">
              Urmați acești pași pentru a investiga corect potențialul incident de securitate:
            </p>
            <ol className="list-decimal list-inside text-gray-400 text-sm space-y-1 ml-2">
              <li>Examinați e-mailurile suspecte pentru indicatori de phishing</li>
              <li>Analizați anteturile e-mailurilor pentru a identifica expeditorul real</li>
              <li>Verificați dacă există acces neautorizat în jurnalele de autentificare</li>
              <li>Determinați dacă s-a făcut clic pe linkuri malițioase</li>
              <li>Implementați măsuri de securitate adecvate</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
