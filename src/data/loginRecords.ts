import { LoginRecordType } from '../types';

export const loginRecords: LoginRecordType[] = [
  {
    id: 'login-1',
    timestamp: 'Jun 15, 2025 - 08:15:22 AM EDT',
    ipAddress: '192.168.1.105',
    location: 'New York, USA',
    device: 'Windows 11 - Chrome 125.0.0.0',
    success: true,
    suspicious: false
  },
  {
    id: 'login-2',
    timestamp: 'Jun 15, 2025 - 09:45:17 AM EDT',
    ipAddress: '192.168.1.105',
    location: 'New York, USA',
    device: 'Windows 11 - Chrome 125.0.0.0',
    success: true,
    suspicious: false
  },
  {
    id: 'login-3',
    timestamp: 'Jun 15, 2025 - 10:27:33 AM EDT',
    ipAddress: '185.159.82.43',
    location: 'Moscow, Russia',
    device: 'Unknown Device - Unknown Browser',
    success: true,
    suspicious: true
  },
  {
    id: 'login-4',
    timestamp: 'Jun 15, 2025 - 10:32:05 AM EDT',
    ipAddress: '103.74.19.104',
    location: 'VPN/Proxy Detected',
    device: 'Linux - Firefox 124.0',
    success: true,
    suspicious: true
  },
  {
    id: 'login-5',
    timestamp: 'Jun 15, 2025 - 11:03:51 AM EDT',
    ipAddress: '192.168.1.105',
    location: 'New York, USA',
    device: 'Windows 11 - Chrome 125.0.0.0',
    success: false,
    suspicious: false
  }
];
