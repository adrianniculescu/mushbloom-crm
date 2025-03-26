import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  RefreshCw, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Edit, 
  Trash2, 
  Plus 
} from 'lucide-react';

interface Message {
  id: string;
  type: 'email' | 'linkedin' | 'other';
  subject?: string;
  content: string;
  createdAt: string;
  savedAt?: string;
}

const AIMessageGenerator = () => {
  const [messageType, setMessageType] = useState<'email' | 'linkedin' | 'other'>('email');
  const [prompt, setPrompt] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [savedMessages, setSavedMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'email',
      subject: 'Following up on our conversation',
      content: 'Dear [Name],\n\nI hope this email finds you well. I wanted to follow up on our conversation from last week regarding...',
      createdAt: '2023-07-01T10:00:00Z',
      savedAt: '2023-07-01T10:05:00Z',
    },
    {
      id: '2',
      type: 'linkedin',
      content: 'Hi [Name], I noticed your work in [industry] and would love to connect. I think there might be some interesting synergies between our companies...',
      createdAt: '2023-07-02T14:30:00Z',
      savedAt: '2023-07-02T14:35:00Z',
    },
  ]);

  const generateMessage = async () => {
    setIsGenerating(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setGeneratedMessage(
      messageType === 'email' 
        ? `Dear [Name],\n\nI hope this email finds you well. Based on your recent post about ${prompt}, I thought you might be interested in learning more about our solutions.\n\nBest regards,\n[Your Name]`
        : `Hi [Name], I noticed your work in ${prompt} and would love to connect. I think there might be some interesting synergies between our companies.`
    );
    setIsGenerating(false);
  };

  const saveMessage = () => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: messageType,
      subject: messageType === 'email' ? 'New Generated Email' : undefined,
      content: generatedMessage,
      createdAt: new Date().toISOString(),
      savedAt: new Date().toISOString(),
    };
    setSavedMessages([newMessage, ...savedMessages]);
  };

  const deleteMessage = (id: string) => {
    setSavedMessages(savedMessages.filter(msg => msg.id !== id));
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">AI Message Generator</h1>
          <p className="text-muted-foreground">Generate personalized messages for your contacts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-xl p-6">
            <div className="flex gap-4 mb-6">
              <button 
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  messageType === 'email' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
                onClick={() => setMessageType('email')}
              >
                <Mail className="h-4 w-4" /> Email
              </button>
              <button 
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  messageType === 'linkedin' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
                onClick={() => setMessageType('linkedin')}
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </button>
              <button 
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  messageType === 'other' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
                onClick={() => setMessageType('other')}
              >
                <MessageSquare className="h-4 w-4" /> Other
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">What would you like to write about?</label>
                <textarea
                  className="w-full h-24 p-3 rounded-lg border border-input resize-none"
                  placeholder="e.g., Following up after our meeting, Introducing our new product, etc."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>

              <button
                className="w-full py-2 bg-primary text-primary-foreground rounded-md flex items-center justify-center gap-2 relative"
                onClick={generateMessage}
                disabled={isGenerating || !prompt.trim()}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Generate Message
                  </>
                )}
              </button>

              {generatedMessage && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Generated Message</h3>
                    <div className="flex gap-2">
                      <button 
                        className="p-2 hover:bg-muted rounded-md"
                        onClick={() => navigator.clipboard.writeText(generatedMessage)}
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                      <button 
                        className="p-2 hover:bg-muted rounded-md"
                        onClick={saveMessage}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-input whitespace-pre-wrap">
                    {generatedMessage}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="glass-panel rounded-xl p-4">
            <h3 className="font-medium mb-4">Saved Messages</h3>
            <div className="space-y-3">
              {savedMessages.map((message) => (
                <div key={message.id} className="p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      {message.type === 'email' && <Mail className="h-4 w-4" />}
                      {message.type === 'linkedin' && <Linkedin className="h-4 w-4" />}
                      {message.type === 'other' && <MessageSquare className="h-4 w-4" />}
                      <span className="font-medium">
                        {message.subject || `${message.type.charAt(0).toUpperCase() + message.type.slice(1)} Message`}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <button className="p-1 hover:bg-background rounded">
                        <Edit className="h-3 w-3" />
                      </button>
                      <button 
                        className="p-1 hover:bg-background rounded text-destructive"
                        onClick={() => deleteMessage(message.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {new Date(message.createdAt).toLocaleDateString()}
                  </div>
                  <div className="text-sm line-clamp-2">
                    {message.content}
                  </div>
                </div>
              ))}

              {savedMessages.length === 0 && (
                <div className="text-center py-6">
                  <p className="text-sm text-muted-foreground">No saved messages yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMessageGenerator;
