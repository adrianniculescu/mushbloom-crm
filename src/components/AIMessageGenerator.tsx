
import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Copy, 
  Clipboard, 
  Check, 
  RefreshCw, 
  Briefcase, 
  UserCircle2, 
  Target,
  Mail
} from 'lucide-react';
import { toast } from 'sonner';

interface ContactOption {
  id: string;
  name: string;
  company: string;
  position: string;
}

const messageTemplates = [
  {
    id: 'intro',
    name: 'Introduction',
    description: 'A friendly introduction to a new contact'
  },
  {
    id: 'follow-up',
    name: 'Follow-up',
    description: 'Follow up after initial contact or meeting'
  },
  {
    id: 'proposal',
    name: 'Proposal',
    description: 'Send a proposal or quote for services'
  },
  {
    id: 'check-in',
    name: 'Check-in',
    description: 'Check in with an existing contact'
  },
  {
    id: 're-engage',
    name: 'Re-engage',
    description: 'Re-engage with a dormant contact'
  }
];

const AIMessageGenerator = () => {
  const [selectedContact, setSelectedContact] = useState<ContactOption | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [messageGoal, setMessageGoal] = useState('');
  const [additionalContext, setAdditionalContext] = useState('');
  const [tone, setTone] = useState('professional');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Sample contacts
  const contacts: ContactOption[] = [
    { id: '1', name: 'John Smith', company: 'Acme Corporation', position: 'Sales Director' },
    { id: '2', name: 'Sarah Johnson', company: 'Globex Inc.', position: 'CTO' },
    { id: '3', name: 'Michael Brown', company: 'XYZ Solutions', position: 'Procurement Manager' },
    { id: '4', name: 'Emma Davis', company: 'ABC Technologies', position: 'CEO' },
    { id: '5', name: 'Robert Wilson', company: 'Oceanic Partners', position: 'Marketing Director' },
  ];

  // Mock generation function
  const generateMessage = () => {
    if (!selectedContact || !selectedTemplate) {
      toast.error('Please select a contact and template');
      return;
    }

    setIsGenerating(true);
    setGeneratedMessage('');

    // Sample messages for different templates
    const messages = {
      'intro': `Hi ${selectedContact.name},\n\nI hope this message finds you well. My name is Alex Morgan from LinkSmart, and I noticed your work at ${selectedContact.company} in the ${selectedContact.position} role.\n\nWe've been helping companies similar to yours improve their sales processes and customer relationships through our intuitive CRM platform. Based on your industry, I thought you might be interested in how we've helped other organizations increase their sales efficiency by up to 35%.\n\nWould you be open to a quick 15-minute call this week to discuss how we might be able to support your team's goals?\n\nBest regards,\nAlex Morgan\nLinkSmart CRM Solutions`,
      
      'follow-up': `Hi ${selectedContact.name},\n\nI wanted to follow up on our previous conversation about implementing a CRM solution at ${selectedContact.company}.\n\nI recall you mentioned challenges with tracking your sales pipeline and customer interactions. I thought you might be interested in this case study of how we helped a similar company in your industry improve their conversion rates by 28% in just three months.\n\nI'm available this week if you'd like to discuss further or schedule a demo with our technical team.\n\nBest regards,\nAlex Morgan\nLinkSmart CRM Solutions`,
      
      'proposal': `Dear ${selectedContact.name},\n\nThank you for our productive discussion about your needs at ${selectedContact.company}. As promised, I've attached a tailored proposal for implementing our CRM solution to address the specific challenges we discussed.\n\nThe proposal includes:\n- Customized implementation plan\n- Training schedule for your team\n- Pricing structure with the 15% discount we discussed\n- Expected ROI timeline\n\nI'm happy to review this with you and your team at your convenience. Would you have time for a call this Thursday or Friday?\n\nBest regards,\nAlex Morgan\nLinkSmart CRM Solutions`,
      
      'check-in': `Hi ${selectedContact.name},\n\nI hope all is going well at ${selectedContact.company}. It's been a few months since we implemented our CRM solution, and I wanted to check in to see how things are progressing.\n\nAre you seeing the improvements in pipeline visibility we discussed? Is your team finding the system intuitive to use?\n\nI'd love to hear your feedback and address any questions that might have come up since our last conversation.\n\nBest regards,\nAlex Morgan\nLinkSmart CRM Solutions`,
      
      're-engage': `Hi ${selectedContact.name},\n\nIt's been a while since we last connected about CRM solutions for ${selectedContact.company}. I hope you've been well.\n\nI recently thought of you because we've released some new features that directly address the challenges you mentioned in our previous conversations, particularly around ${additionalContext || 'sales analytics and reporting'}.\n\nWould it make sense to reconnect briefly to explore if these new capabilities might be valuable for your team now?\n\nBest regards,\nAlex Morgan\nLinkSmart CRM Solutions`
    };

    // Simulate AI generation with delay
    setTimeout(() => {
      setGeneratedMessage(messages[selectedTemplate as keyof typeof messages]);
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopyClick = () => {
    if (textAreaRef.current && generatedMessage) {
      navigator.clipboard.writeText(textAreaRef.current.value)
        .then(() => {
          setCopied(true);
          toast.success('Message copied to clipboard');
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          toast.error('Failed to copy message');
        });
    }
  };

  const handleSendEmail = () => {
    if (selectedContact && generatedMessage) {
      toast.success(`Email drafted to ${selectedContact.name}`);
      // In a real app, this would open the email compose functionality
    }
  };

  useEffect(() => {
    // Adjust textarea height
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [generatedMessage, isCustomizing]);

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">AI Message Generator</h1>
          <p className="text-muted-foreground">Create personalized sales messages in seconds</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass-panel rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Generate Message
            </h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="contact" className="block text-sm font-medium mb-1">
                  Select Contact
                </label>
                <select
                  id="contact"
                  className="w-full py-2 px-3 rounded-md border border-input bg-background"
                  value={selectedContact?.id || ''}
                  onChange={(e) => {
                    const contact = contacts.find(c => c.id === e.target.value);
                    setSelectedContact(contact || null);
                  }}
                >
                  <option value="">Select a contact...</option>
                  {contacts.map(contact => (
                    <option key={contact.id} value={contact.id}>
                      {contact.name} - {contact.company}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="template" className="block text-sm font-medium mb-1">
                  Message Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {messageTemplates.map(template => (
                    <div
                      key={template.id}
                      className={`p-3 rounded-md border cursor-pointer transition-colors ${
                        selectedTemplate === template.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-input hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <div className="font-medium">{template.name}</div>
                      <div className="text-xs text-muted-foreground">{template.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-medium mb-1">
                  Message Goal
                </label>
                <input
                  id="goal"
                  type="text"
                  className="w-full py-2 px-3 rounded-md border border-input bg-background"
                  placeholder="e.g., Schedule a demo, Get feedback on proposal"
                  value={messageGoal}
                  onChange={(e) => setMessageGoal(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="tone" className="block text-sm font-medium mb-1">
                    Tone
                  </label>
                  <select
                    id="tone"
                    className="w-full py-2 px-3 rounded-md border border-input bg-background"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                  >
                    <option value="professional">Professional</option>
                    <option value="friendly">Friendly</option>
                    <option value="casual">Casual</option>
                    <option value="formal">Formal</option>
                    <option value="enthusiastic">Enthusiastic</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="additional" className="block text-sm font-medium mb-1">
                    Additional Context (Optional)
                  </label>
                  <input
                    id="additional"
                    type="text"
                    className="w-full py-2 px-3 rounded-md border border-input bg-background"
                    placeholder="e.g., Mention recent company news"
                    value={additionalContext}
                    onChange={(e) => setAdditionalContext(e.target.value)}
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  className="w-full bg-primary text-primary-foreground py-2 rounded-md flex items-center justify-center gap-2"
                  onClick={generateMessage}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Generate Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {generatedMessage && (
            <div className="glass-panel rounded-xl p-6 animate-scale-in">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Generated Message</h2>
                <div className="flex gap-2">
                  <button
                    className="p-2 rounded-md hover:bg-muted transition-colors"
                    onClick={() => setIsCustomizing(!isCustomizing)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button
                    className="p-2 rounded-md hover:bg-muted transition-colors"
                    onClick={handleCopyClick}
                  >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                  <button
                    className="p-2 rounded-md hover:bg-muted transition-colors"
                    onClick={generateMessage}
                  >
                    <RefreshCw className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="border border-input rounded-md p-4 bg-background">
                {isCustomizing ? (
                  <textarea
                    ref={textAreaRef}
                    className="w-full min-h-[300px] bg-transparent resize-none outline-none"
                    value={generatedMessage}
                    onChange={(e) => setGeneratedMessage(e.target.value)}
                  />
                ) : (
                  <div className="whitespace-pre-wrap">{generatedMessage}</div>
                )}
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  className="px-4 py-2 border border-input rounded-md flex items-center gap-2 hover:bg-muted transition-colors"
                  onClick={handleCopyClick}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
                <button
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2"
                  onClick={handleSendEmail}
                >
                  <Send className="h-4 w-4" />
                  Create Email
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {selectedContact && (
            <div className="glass-panel rounded-xl p-4 animate-fade-in">
              <h3 className="font-medium mb-3">Contact Details</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {selectedContact.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-medium">{selectedContact.name}</div>
                  <div className="text-sm text-muted-foreground">{selectedContact.position}</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedContact.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedContact.name.toLowerCase().replace(' ', '.')}@{selectedContact.company.toLowerCase().replace(' ', '')}.com</span>
                </div>
              </div>
            </div>
          )}

          <div className="glass-panel rounded-xl p-4">
            <h3 className="font-medium mb-3">Tips for Effective Messages</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <UserCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Personalize</div>
                  <p className="text-muted-foreground">Show that you understand their specific needs and challenges.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Target className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Be concise</div>
                  <p className="text-muted-foreground">Keep messages brief and focused on a single objective.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Add value</div>
                  <p className="text-muted-foreground">Provide useful information or insights in every message.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-4">
            <h3 className="font-medium mb-3">Message Analytics</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Open Rate</span>
                  <span className="font-medium">42%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Response Rate</span>
                  <span className="font-medium">28%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '28%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Meeting Conversion</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMessageGenerator;
