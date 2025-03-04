import React from 'react';
import { ArrowLeft, Shield, CheckCircle } from 'lucide-react';
import { mitigationActions } from '../data/mitigationActions';

interface MitigationPanelProps {
  selectedActions: string[];
  onSelectAction: (action: string) => void;
  onCompleteInvestigation: () => void;
  onBackToLogs: () => void;
}

const MitigationPanel: React.FC<MitigationPanelProps> = ({ 
  selectedActions, 
  onSelectAction, 
  onCompleteInvestigation,
  onBackToLogs
}) => {
  const requiredActions = mitigationActions.filter(action => action.required);
  const optionalActions = mitigationActions.filter(action => !action.required);
  
  const allRequiredSelected = requiredActions.every(action => 
    selectedActions.includes(action.id)
  );

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
      <div className="bg-gray-700 p-4 flex items-center justify-between border-b border-gray-600">
        <div className="flex items-center">
          <button 
            onClick={onBackToLogs}
            className="mr-4 p-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-lg font-semibold">Acțiuni de Atenuare a Securității</h2>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-6 bg-blue-900/20 border border-blue-800 rounded p-4">
          <div className="flex items-start">
            <Shield className="text-blue-400 mr-3 flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-medium text-blue-400 mb-1">Răspuns la Incident Necesar</h3>
              <p className="text-gray-300 text-sm">
                Pe baza investigației dvs., ați confirmat că contul lui John Doe a fost compromis printr-un atac de phishing. 
                Selectați măsurile de securitate adecvate pentru a atenua incidentul și a preveni daune suplimentare.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Acțiuni de Securitate Obligatorii</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {requiredActions.map(action => (
              <div 
                key={action.id}
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedActions.includes(action.id)
                    ? 'bg-blue-900/30 border-blue-500'
                    : 'bg-gray-700 border-gray-600 hover:border-blue-400'
                }`}
                onClick={() => onSelectAction(action.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{action.name}</h4>
                  {selectedActions.includes(action.id) && (
                    <CheckCircle className="text-blue-400" size={18} />
                  )}
                </div>
                <p className="text-sm text-gray-400">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Acțiuni de Securitate Opționale</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {optionalActions.map(action => (
              <div 
                key={action.id}
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedActions.includes(action.id)
                    ? 'bg-blue-900/30 border-blue-500'
                    : 'bg-gray-700 border-gray-600 hover:border-blue-400'
                }`}
                onClick={() => onSelectAction(action.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{action.name}</h4>
                  {selectedActions.includes(action.id) && (
                    <CheckCircle className="text-blue-400" size={18} />
                  )}
                </div>
                <p className="text-sm text-gray-400">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400">
            {selectedActions.length} acțiuni de securitate selectate
            {!allRequiredSelected && (
              <span className="text-red-400 ml-2">
                (Toate acțiunile obligatorii trebuie selectate)
              </span>
            )}
          </div>
          <div>
            <button 
              onClick={onCompleteInvestigation}
              className={`px-4 py-2 rounded font-medium ${
                allRequiredSelected 
                  ? 'bg-green-600 hover:bg-green-500' 
                  : 'bg-gray-600 cursor-not-allowed'
              }`}
              disabled={!allRequiredSelected}
            >
              Finalizează Investigația
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MitigationPanel;
