import { EmailType } from '../types';

export const emails: EmailType[] = [
  {
    id: 'email-1',
    from: 'support@paypa1.com',
    fromName: 'PayPal Support',
    to: 'john.doe@company.com',
    subject: '[URGENT] Account Verification Required',
    date: 'Today, 10:23 AM',
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://unsplash.com/photos/a-blue-and-white-logo-on-a-white-background-QpD6l80tVzE" alt="PayPal Logo" style="max-width: 150px;" />
        </div>
        
        <div style="margin-bottom: 20px;">
          <h2 style="color: #0070ba; margin-bottom: 10px;">Account Security Alert</h2>
          <p>Dear Valued Customer,</p>
          <p>We have detected unusual activity on your PayPal account. To ensure your account security, we require immediate verification.</p>
          <p><strong>If you do not verify your account within 24 hours, your account will be limited.</strong></p>
        </div>
        
        <div style="background-color: #f5f5f5; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
          <p style="margin: 0; font-weight: bold;">Please complete the following steps:</p>
          <ol style="margin-top: 10px; margin-bottom: 0;">
            <li>Click the secure link below</li>
            <li>Log in to your PayPal account</li>
            <li>Verify your personal information</li>
            <li>Confirm your payment methods</li>
          </ol>
        </div>
        
        <div style="text-align: center; margin-bottom: 20px;">
          <a href="#" id="phishing-link" style="display: inline-block; background-color: #0070ba; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Verify Your Account Now</a>
        </div>
        
        <div style="font-size: 12px; color: #666; margin-top: 30px; padding-top: 10px; border-top: 1px solid #e0e0e0;">
          <p>This email was sent by PayPal to ensure the security of your account. To report suspicious activity, contact our customer service.</p>
          <p>&copy; 2025 PayPal. All rights reserved. PayPal is located at 2211 North First Street, San Jose, CA 95131.</p>
          <p>Please do not reply to this email. This mailbox is not monitored and you will not receive a response.</p>
        </div>
      </div>
    `,
    isPhishing: true,
    hasAttachment: true,
    attachmentName: 'PayPal_Invoice_8547.pdf',
    headers: `Return-Path: <malicious@attacker-server.net>
Received: from unknown (HELO mail-server.attacker-controlled.com) (185.159.82.43)
  by mx.company-mail-server.com with ESMTP; 15 Jun 2025 10:23:15 -0400
Received: from internal-relay.attacker-controlled.com (unknown [192.168.1.5])
  by mail-server.attacker-controlled.com (Postfix) with ESMTP id 4B7F92C1A55
  for <john.doe@company.com>; 15 Jun 2025 16:23:10 +0200
From: "PayPal Support" <support@paypa1.com>
To: "John Doe" <john.doe@company.com>
Subject: [URGENT] Account Verification Required
Date: 15 Jun 2025 16:23:05 +0200
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="----=_NextPart_000_0012_01D8C234.5B8F9A70"
X-Mailer: Microsoft Outlook 16.0
Message-ID: <fake-message-id-1234567890@paypa1.com>
X-Priority: 1
X-MSMail-Priority: High
Importance: High
X-Spam-Status: No, score=-0.1
X-Spam-Score: -0.1
X-Spam-Bar: /
X-Ham-Report: Spam detection software, running on the system "mx.company-mail-server.com",
 has NOT identified this incoming email as spam. The original
 message has been attached to this so you can view it or label
 similar future email. If you have any questions, see
 the administrator of that system for details.
Content-Length: 7653`
  },
  {
    id: 'email-2',
    from: 'hr@company.com',
    fromName: 'HR Department',
    to: 'john.doe@company.com',
    subject: 'Upcoming Team Building Event',
    date: 'Yesterday, 4:15 PM',
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333;">Team Building Event: Save the Date!</h2>
        <p>Hello John,</p>
        <p>We're excited to announce our upcoming team building event scheduled for next month. Please save the date!</p>
        <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <p><strong>Event Details:</strong></p>
          <ul>
            <li><strong>Date:</strong> July 15, 2025</li>
            <li><strong>Time:</strong> 10:00 AM - 4:00 PM</li>
            <li><strong>Location:</strong> Central Park, Main Pavilion</li>
            <li><strong>Activities:</strong> Outdoor games, team challenges, and a catered lunch</li>
          </ul>
        </div>
        <p>Please confirm your attendance by replying to this email by June 30th.</p>
        <p>Best regards,<br>HR Department</p>
      </div>
    `,
    isPhishing: false,
    hasAttachment: false
  },
  {
    id: 'email-3',
    from: 'newsletter@techupdate.com',
    fromName: 'Tech Update Weekly',
    to: 'john.doe@company.com',
    subject: 'This Week in Tech: AI Breakthroughs',
    date: 'Jun 14, 3:42 PM',
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333;">This Week in Tech: AI Breakthroughs</h2>
        <p>The latest news and updates from the world of technology:</p>
        <ul>
          <li><strong>AI Research:</strong> New neural network architecture shows promising results in natural language understanding</li>
          <li><strong>Industry News:</strong> Major tech companies announce collaboration on open-source AI safety standards</li>
          <li><strong>Cybersecurity:</strong> Recent ransomware attacks highlight importance of backup strategies</li>
          <li><strong>Hardware:</strong> Next-generation processors promise 40% performance improvement</li>
        </ul>
        <p><a href="https://www.techupdate.com/newsletter/june-14-2025">Read the full newsletter online</a></p>
        <p>To unsubscribe from these updates, <a href="https://www.techupdate.com/unsubscribe">click here</a>.</p>
      </div>
    `,
    isPhishing: false,
    hasAttachment: false
  },
  {
    id: 'email-4',
    from: 'alex.johnson@company.com',
    fromName: 'Alex Johnson',
    to: 'john.doe@company.com',
    subject: 'Meeting Notes: Project Phoenix',
    date: 'Jun 13, 11:17 AM',
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333;">Meeting Notes: Project Phoenix</h2>
        <p>Hi John,</p>
        <p>Here are the key points from our meeting this morning:</p>
        <ul>
          <li>Development timeline adjusted - new launch date set for August 15th</li>
          <li>Additional QA resources approved for July testing phase</li>
          <li>Client demo scheduled for July 25th</li>
          <li>Marketing materials need to be finalized by end of June</li>
        </ul>
        <p>Please review and let me know if I missed anything important.</p>
        <p>Thanks,<br>Alex</p>
      </div>
    `,
    isPhishing: false,
    hasAttachment: false
  },
  {
    id: 'email-5',
    from: 'it-support@company.com',
    fromName: 'IT Support',
    to: 'all-staff@company.com',
    subject: 'Scheduled System Maintenance',
    date: 'Jun 12, 9:05 AM',
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333;">Scheduled System Maintenance</h2>
        <p>Dear Colleagues,</p>
        <p>Please be informed that we will be performing scheduled maintenance on our systems this weekend.</p>
        <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <p><strong>Maintenance Window:</strong></p>
          <ul>
            <li><strong>Start:</strong> Saturday, June 17, 2025 at 10:00 PM EDT</li>
            <li><strong>End:</strong> Sunday, June 18, 2025 at 2:00 AM EDT</li>
          </ul>
        </div>
        <p>During this time, the following systems will be unavailable:</p>
        <ul>
          <li>Email (Webmail access only - mobile and desktop clients will be affected)</li>
          <li>Intranet portal</li>
          <li>Project management system</li>
          <li>File sharing services</li>
        </ul>
        <p>Please plan your work accordingly and save any important documents before the maintenance begins.</p>
        <p>If you have any questions or concerns, please contact the IT Help Desk.</p>
        <p>Thank you for your understanding.</p>
        <p>Best regards,<br>IT Support Team</p>
      </div>
    `,
    isPhishing: false,
    hasAttachment: false
  }
];
