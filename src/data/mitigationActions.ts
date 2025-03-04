import { MitigationActionType } from '../types';

export const mitigationActions: MitigationActionType[] = [
  {
    id: 'resetPassword',
    name: 'Force Password Reset',
    description: 'Force an immediate password reset for the compromised user account',
    required: true
  },
  {
    id: 'quarantineEmail',
    name: 'Quarantine Phishing Email',
    description: 'Move the phishing email to quarantine and scan for similar messages in other inboxes',
    required: true
  },
  {
    id: 'blockIP',
    name: 'Block Attacker IP & Domain',
    description: 'Add the attacker\'s IP address and domain to the firewall blocklist',
    required: true
  },
  {
    id: 'notifyEmployees',
    name: 'Notify Affected Employees',
    description: 'Send an alert to all employees about the phishing attempt with examples',
    required: true
  },
  {
    id: 'disableAccount',
    name: 'Disable User Account',
    description: 'Temporarily disable the affected user account until investigation is complete',
    required: false
  },
  {
    id: 'scanAttachment',
    name: 'Scan Attachment for Malware',
    description: 'Run a deep scan on the email attachment to check for malware',
    required: false
  },
  {
    id: 'reportToAuthorities',
    name: 'Report to Authorities',
    description: 'Submit details of the attack to relevant cybersecurity authorities',
    required: false
  },
  {
    id: 'updateFilters',
    name: 'Update Email Filters',
    description: 'Enhance email filtering rules based on this phishing attempt',
    required: false
  }
];
