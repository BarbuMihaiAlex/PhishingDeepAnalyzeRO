import React, { useState } from 'react';
import { Mail, Shield, AlertTriangle, FileText, User, Clock, Globe, Lock, CheckCircle, X } from 'lucide-react';
import Dashboard from './components/Dashboard';
import EmailInbox from './components/EmailInbox';
import EmailViewer from './components/EmailViewer';
import HeaderAnalyzer from './components/HeaderAnalyzer';
import LoginActivity from './components/LoginActivity';
import PhishingSite from './components/PhishingSite';
import MitigationPanel from './components/MitigationPanel';
import CompletionScreen from './components/CompletionScreen';
import PolicyViewer from './components/PolicyViewer';
import { PhaseType, EmailType } from './types';

function App() {
  const [currentPhase, setCurrentPhase] = useState<PhaseType>('dashboard');
  const [selectedEmail, setSelectedEmail] = useState<EmailType | null>(null);
  const [identifiedPhishingIndicators, setIdentifiedPhishingIndicators] = useState<string[]>([]);
  const [identifiedHeaderFlags, setIdentifiedHeaderFlags] = useState<string[]>([]);
  const [identifiedLoginIssue, setIdentifiedLoginIssue] = useState<boolean>(false);
  const [identifiedSiteFlags, setIdentifiedSiteFlags] = useState<string[]>([]);
  const [selectedMitigationActions, setSelectedMitigationActions] = useState<string[]>([]);
  const [showFlag, setShowFlag] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const handleSelectEmail = (email: EmailType) => {
    setSelectedEmail(email);
    setCurrentPhase('emailViewer');
  };

  const handleIdentifyPhishingIndicator = (indicator: string) => {
    if (!identifiedPhishingIndicators.includes(indicator)) {
      const newIndicators = [...identifiedPhishingIndicators, indicator];
      setIdentifiedPhishingIndicators(newIndicators);
      
      // If 3 indicators found, update progress
      if (newIndicators.length >= 3 && currentPhase === 'emailViewer') {
        setProgress(Math.max(progress, 25));
      }
    }
  };

  const handleIdentifyHeaderFlag = (flag: string) => {
    if (!identifiedHeaderFlags.includes(flag)) {
      const newFlags = [...identifiedHeaderFlags, flag];
      setIdentifiedHeaderFlags(newFlags);
      
      // If 2 header flags found, update progress
      if (newFlags.length >= 2 && currentPhase === 'headerAnalyzer') {
        setProgress(Math.max(progress, 40));
      }
    }
  };

  const handleIdentifyLoginIssue = () => {
    setIdentifiedLoginIssue(true);
    if (currentPhase === 'loginActivity') {
      setProgress(Math.max(progress, 60));
    }
  };

  const handleIdentifySiteFlag = (flag: string) => {
    if (!identifiedSiteFlags.includes(flag)) {
      const newFlags = [...identifiedSiteFlags, flag];
      setIdentifiedSiteFlags(newFlags);
      
      // If 3 site flags found, update progress
      if (newFlags.length >= 3 && currentPhase === 'phishingSite') {
        setProgress(Math.max(progress, 80));
      }
    }
  };

  const handleSelectMitigationAction = (action: string) => {
    if (selectedMitigationActions.includes(action)) {
      setSelectedMitigationActions(selectedMitigationActions.filter(a => a !== action));
    } else {
      setSelectedMitigationActions([...selectedMitigationActions, action]);
    }
  };

  const handleCompleteInvestigation = () => {
    // Check if all required actions are selected
    const requiredActions = [
      'resetPassword', 
      'quarantineEmail', 
      'blockIP', 
      'notifyEmployees'
    ];
    
    const allActionsSelected = requiredActions.every(action => 
      selectedMitigationActions.includes(action)
    );
    
    if (allActionsSelected) {
      setShowFlag(true);
      setProgress(100);
      setCurrentPhase('completion');
    }
  };

  const renderPhaseContent = () => {
    switch (currentPhase) {
      case 'dashboard':
        return (
          <Dashboard 
            onOpenInbox={() => setCurrentPhase('inbox')}
            onOpenLogs={() => setCurrentPhase('loginActivity')}
            onOpenPolicy={() => setCurrentPhase('policy')}
          />
        );
      case 'inbox':
        return (
          <EmailInbox 
            onSelectEmail={handleSelectEmail}
            onBackToDashboard={() => setCurrentPhase('dashboard')}
          />
        );
      case 'emailViewer':
        return (
          <EmailViewer 
            email={selectedEmail}
            identifiedIndicators={identifiedPhishingIndicators}
            onIdentifyIndicator={handleIdentifyPhishingIndicator}
            onViewHeaders={() => setCurrentPhase('headerAnalyzer')}
            onViewPhishingSite={() => setCurrentPhase('phishingSite')}
            onBackToInbox={() => setCurrentPhase('inbox')}
            canProceed={identifiedPhishingIndicators.length >= 3}
          />
        );
      case 'headerAnalyzer':
        return (
          <HeaderAnalyzer 
            email={selectedEmail}
            identifiedFlags={identifiedHeaderFlags}
            onIdentifyFlag={handleIdentifyHeaderFlag}
            onBackToEmail={() => setCurrentPhase('emailViewer')}
            onProceedToLogs={() => setCurrentPhase('loginActivity')}
            canProceed={identifiedHeaderFlags.length >= 2}
          />
        );
      case 'loginActivity':
        return (
          <LoginActivity 
            identifiedIssue={identifiedLoginIssue}
            onIdentifyIssue={handleIdentifyLoginIssue}
            onBackToDashboard={() => setCurrentPhase('dashboard')}
            onProceedToMitigation={() => setCurrentPhase('mitigation')}
            canProceed={identifiedLoginIssue}
          />
        );
      case 'phishingSite':
        return (
          <PhishingSite 
            identifiedFlags={identifiedSiteFlags}
            onIdentifyFlag={handleIdentifySiteFlag}
            onBackToEmail={() => setCurrentPhase('emailViewer')}
            onProceedToMitigation={() => setCurrentPhase('mitigation')}
            canProceed={identifiedSiteFlags.length >= 3}
          />
        );
      case 'mitigation':
        return (
          <MitigationPanel 
            selectedActions={selectedMitigationActions}
            onSelectAction={handleSelectMitigationAction}
            onCompleteInvestigation={handleCompleteInvestigation}
            onBackToLogs={() => setCurrentPhase('loginActivity')}
          />
        );
      case 'completion':
        return (
          <CompletionScreen 
            showFlag={showFlag}
            onRestartInvestigation={() => {
              setCurrentPhase('dashboard');
              setSelectedEmail(null);
              setIdentifiedPhishingIndicators([]);
              setIdentifiedHeaderFlags([]);
              setIdentifiedLoginIssue(false);
              setIdentifiedSiteFlags([]);
              setSelectedMitigationActions([]);
              setShowFlag(false);
              setProgress(0);
            }}
          />
        );
      case 'policy':
        return (
          <PolicyViewer 
            onBackToDashboard={() => setCurrentPhase('dashboard')}
          />
        );
      default:
        return <div>Unknown phase</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="text-blue-400" size={24} />
            <h1 className="text-xl font-bold">PhishRecon: Investigarea Căsuței de E-mail Compromise</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              <span className="font-medium">Progresul Investigării:</span>
            </div>
            <div className="w-64 bg-gray-700 rounded-full h-4">
              <div 
                className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-sm font-medium">
              {progress}%
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {renderPhaseContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 p-4 mt-auto">
        <div className="container mx-auto text-center text-gray-400 text-sm">
          <p>PhishRecon Cybersecurity Training Lab &copy; 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
