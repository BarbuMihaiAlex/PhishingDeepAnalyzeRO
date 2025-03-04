export type PhaseType = 
  | 'dashboard' 
  | 'inbox' 
  | 'emailViewer' 
  | 'headerAnalyzer' 
  | 'loginActivity' 
  | 'phishingSite' 
  | 'mitigation' 
  | 'completion'
  | 'policy';

export type EmailType = {
  id: string;
  from: string;
  fromName: string;
  to: string;
  subject: string;
  date: string;
  body: string;
  isPhishing: boolean;
  hasAttachment: boolean;
  attachmentName?: string;
  headers?: string;
};

export type LoginRecordType = {
  id: string;
  timestamp: string;
  ipAddress: string;
  location: string;
  device: string;
  success: boolean;
  suspicious: boolean;
};

export type MitigationActionType = {
  id: string;
  name: string;
  description: string;
  required: boolean;
};
