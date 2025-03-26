/**
 * AI Message Generation Utilities
 * 
 * This file contains utilities for generating personalized sales messages using AI.
 * In a real application, these functions would make API calls to an AI service.
 * For this demo, they return predefined templates.
 */

export interface MessageParams {
  recipient: {
    name: string;
    company: string;
    position: string;
    industry?: string;
  };
  sender: {
    name: string;
    company: string;
    position: string;
  };
  context?: {
    previousInteraction?: string;
    lastContact?: string;
    notes?: string;
    goal?: string;
  };
  preferences?: {
    tone?: 'formal' | 'professional' | 'friendly' | 'casual';
    length?: 'short' | 'medium' | 'long';
    includeCallToAction?: boolean;
  };
}

export interface MessageTemplate {
  id: string;
  name: string;
  description: string;
  defaultSubject: string;
  body: string;
}

// Available message templates
export const messageTemplates: MessageTemplate[] = [
  {
    id: 'introduction',
    name: 'Introduction',
    description: 'Introduce yourself and your company to a new contact',
    defaultSubject: 'Introduction from {{sender.name}} at {{sender.company}}',
    body: `Hi {{recipient.name}},

I hope this message finds you well. My name is {{sender.name}} from {{sender.company}}, and I noticed your work at {{recipient.company}} in the {{recipient.position}} role.

We've been helping companies similar to yours improve their sales processes and customer relationships through our intuitive CRM platform. Based on your industry, I thought you might be interested in how we've helped other organizations increase their sales efficiency by up to 35%.

Would you be open to a quick 15-minute call this week to discuss how we might be able to support your team's goals?

Best regards,
{{sender.name}}
{{sender.position}} | {{sender.company}}`
  },
  {
    id: 'follow-up',
    name: 'Follow-up',
    description: 'Follow up after initial contact or meeting',
    defaultSubject: 'Following up on our conversation about {{sender.company}}',
    body: `Hi {{recipient.name}},

I wanted to follow up on our previous conversation about implementing a CRM solution at {{recipient.company}}.

I recall you mentioned challenges with tracking your sales pipeline and customer interactions. I thought you might be interested in this case study of how we helped a similar company in your industry improve their conversion rates by 28% in just three months.

I'm available this week if you'd like to discuss further or schedule a demo with our technical team.

Best regards,
{{sender.name}}
{{sender.position}} | {{sender.company}}`
  },
  {
    id: 'proposal',
    name: 'Proposal',
    description: 'Send a proposal or quote for services',
    defaultSubject: 'Proposal for {{recipient.company}} - {{sender.company}} CRM Solution',
    body: `Dear {{recipient.name}},

Thank you for our productive discussion about your needs at {{recipient.company}}. As promised, I've attached a tailored proposal for implementing our CRM solution to address the specific challenges we discussed.

The proposal includes:
- Customized implementation plan
- Training schedule for your team
- Pricing structure with the 15% discount we discussed
- Expected ROI timeline

I'm happy to review this with you and your team at your convenience. Would you have time for a call this Thursday or Friday?

Best regards,
{{sender.name}}
{{sender.position}} | {{sender.company}}`
  },
  {
    id: 'check-in',
    name: 'Check-in',
    description: 'Check in with an existing contact',
    defaultSubject: 'Quick check-in from {{sender.name}} at {{sender.company}}',
    body: `Hi {{recipient.name}},

I hope all is going well at {{recipient.company}}. It's been a few months since we implemented our CRM solution, and I wanted to check in to see how things are progressing.

Are you seeing the improvements in pipeline visibility we discussed? Is your team finding the system intuitive to use?

I'd love to hear your feedback and address any questions that might have come up since our last conversation.

Best regards,
{{sender.name}}
{{sender.position}} | {{sender.company}}`
  },
  {
    id: 're-engage',
    name: 'Re-engage',
    description: 'Re-engage with a dormant contact',
    defaultSubject: 'Reconnecting from {{sender.company}} - New features you might like',
    body: `Hi {{recipient.name}},

It's been a while since we last connected about CRM solutions for {{recipient.company}}. I hope you've been well.

I recently thought of you because we've released some new features that directly address the challenges you mentioned in our previous conversations, particularly around sales analytics and reporting.

Would it make sense to reconnect briefly to explore if these new capabilities might be valuable for your team now?

Best regards,
{{sender.name}}
{{sender.position}} | {{sender.company}}`
  }
];

/**
 * Generate a personalized message based on the provided parameters
 */
export const generateMessage = async (
  templateId: string,
  params: MessageParams
): Promise<string> => {
  // In a real app, this would call an AI API
  console.log(`Generating message with template ${templateId}`, params);
  
  // Find the requested template
  const template = messageTemplates.find(t => t.id === templateId);
  
  if (!template) {
    throw new Error(`Template with ID ${templateId} not found`);
  }
  
  // Replace template variables with actual values
  let message = template.body;
  
  // Replace recipient info
  message = message.replace(/{{recipient\.name}}/g, params.recipient.name);
  message = message.replace(/{{recipient\.company}}/g, params.recipient.company);
  message = message.replace(/{{recipient\.position}}/g, params.recipient.position);
  
  // Replace sender info
  message = message.replace(/{{sender\.name}}/g, params.sender.name);
  message = message.replace(/{{sender\.company}}/g, params.sender.company);
  message = message.replace(/{{sender\.position}}/g, params.sender.position);
  
  // Add context if available
  if (params.context?.previousInteraction) {
    message = message.replace(
      "I wanted to follow up on our previous conversation",
      `I wanted to follow up on our ${params.context.previousInteraction}`
    );
  }
  
  // Adjust tone based on preferences
  if (params.preferences?.tone) {
    switch (params.preferences.tone) {
      case 'formal':
        message = message.replace("Hi", "Dear");
        message = message.replace("would you be open to", "I would like to request");
        message = message.replace("Best regards", "Sincerely");
        break;
      case 'friendly':
        message = message.replace("Hi", "Hey");
        message = message.replace("I hope this message finds you well", "Hope you're doing great");
        message = message.replace("Would you be open to", "How about we schedule");
        message = message.replace("Best regards", "Cheers");
        break;
      case 'casual':
        message = message.replace("Hi", "Hey there");
        message = message.replace("I hope this message finds you well", "Hope you're having a good week");
        message = message.replace("Would you be open to", "Would you be up for");
        message = message.replace("Best regards", "Thanks");
        break;
      default:
        // Keep professional tone (default)
        break;
    }
  }
  
  // Adjust length based on preferences
  if (params.preferences?.length === 'short') {
    message = message.split('\n\n').filter((_, i) => i !== 1).join('\n\n');
  } else if (params.preferences?.length === 'long') {
    const industryNote = params.recipient.industry 
      ? `\n\nIn the ${params.recipient.industry} industry specifically, we've seen companies achieve remarkable results by optimizing their customer relationship workflows and implementing data-driven sales strategies.` 
      : '';
    
    message = message.replace(
      "Best regards,",
      `${industryNote}\n\nI've attached some additional resources that you might find valuable. Please don't hesitate to reach out if you have any questions or would like more information.\n\nBest regards,`
    );
  }
  
  return message;
};

/**
 * Generate a message subject line based on the provided parameters
 */
export const generateSubject = async (
  templateId: string,
  params: MessageParams
): Promise<string> => {
  // In a real app, this might use AI to generate a subject
  console.log(`Generating subject for template ${templateId}`, params);
  
  // Find the requested template
  const template = messageTemplates.find(t => t.id === templateId);
  
  if (!template) {
    throw new Error(`Template with ID ${templateId} not found`);
  }
  
  // Replace template variables with actual values
  let subject = template.defaultSubject;
  
  // Replace recipient info
  subject = subject.replace(/{{recipient\.name}}/g, params.recipient.name);
  subject = subject.replace(/{{recipient\.company}}/g, params.recipient.company);
  subject = subject.replace(/{{recipient\.position}}/g, params.recipient.position);
  
  // Replace sender info
  subject = subject.replace(/{{sender\.name}}/g, params.sender.name);
  subject = subject.replace(/{{sender\.company}}/g, params.sender.company);
  subject = subject.replace(/{{sender\.position}}/g, params.sender.position);
  
  return subject;
};

/**
 * Analyze a message for its effectiveness
 */
export interface MessageAnalysis {
  score: number; // 0-100
  readabilityLevel: 'simple' | 'standard' | 'complex';
  tone: 'formal' | 'professional' | 'friendly' | 'casual';
  estimatedResponseRate: number; // 0-100 percentage
  suggestions: string[];
  strengths: string[];
  wordCount: number;
}

export const analyzeMessage = async (message: string): Promise<MessageAnalysis> => {
  // In a real app, this would call an AI API
  console.log(`Analyzing message: ${message.substring(0, 50)}...`);
  
  // Count words
  const wordCount = message.split(/\s+/).length;
  
  // Mock analysis
  const score = 70 + Math.floor(Math.random() * 20);
  
  return {
    score,
    readabilityLevel: wordCount > 200 ? 'complex' : wordCount > 100 ? 'standard' : 'simple',
    tone: message.includes("Dear") ? 'formal' : 
          message.includes("Hey there") ? 'casual' : 
          message.includes("Hey") ? 'friendly' : 'professional',
    estimatedResponseRate: score * 0.7,
    suggestions: [
      'Consider adding a more specific call to action',
      'Personalize the first paragraph more to the recipient\'s specific situation',
      'Mention a recent company achievement or news'
    ],
    strengths: [
      'Clear value proposition',
      'Good length for busy professionals',
      'Includes specific benefit statistics'
    ],
    wordCount
  };
};
