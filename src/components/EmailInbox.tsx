import React from 'react';
import { ArrowLeft, Mail, AlertCircle, Paperclip, Clock } from 'lucide-react';
import { emails } from '../data/emails';
import { EmailType } from '../types';

interface EmailInboxProps {
  onSelectEmail: (email: EmailType) => void;
  onBackToDashboard: () => void;
}

const EmailInbox: React.FC<EmailInboxProps> = ({ onSelectEmail, onBackToDashboard }) => {
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
          <h2 className="text-lg font-semibold">Căsuța de E-mail a lui John Doe</h2>
        </div>
        <div className="flex items-center text-gray-400 text-sm">
          <Clock size={16} className="mr-1" />
          <span>Ultima actualizare: 15 Iunie 2025 - 11:20 AM</span>
        </div>
      </div>
      
      <div className="p-2">
        <div className="bg-gray-700 p-2 rounded mb-2 flex items-center">
          <Mail className="text-gray-400 mr-2" size={16} />
          <input 
            type="text" 
            placeholder="Caută e-mailuri..." 
            className="bg-transparent border-none outline-none text-white w-full"
            readOnly
          />
        </div>
      </div>
      
      <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
        {emails.map((email) => (
          <div 
            key={email.id}
            onClick={() => onSelectEmail(email)}
            className={`p-4 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition-colors flex items-start ${
              email.isPhishing ? 'bg-red-900/20' : ''
            }`}
          >
            <div className="mr-3 mt-1">
              {email.isPhishing && <AlertCircle className="text-red-500" size={18} />}
              {!email.isPhishing && <Mail className="text-gray-400" size={18} />}
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium truncate">{email.fromName}</span>
                <span className="text-gray-400 text-sm">{email.date}</span>
              </div>
              <div className="font-medium mb-1 truncate">{email.subject}</div>
              <div className="flex items-center">
                {email.hasAttachment && (
                  <span className="flex items-center text-gray-400 text-sm mr-2">
                    <Paperclip size={14} className="mr-1" />
                    {email.attachmentName}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailInbox;
