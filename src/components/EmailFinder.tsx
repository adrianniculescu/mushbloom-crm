
import React, { useState } from 'react';
import { Search, Linkedin, Copy, RefreshCw, Check, AlertCircle, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

interface Email {
  email: string;
  confidence: number;
  source: string;
  lastVerified: string;
}

const EmailFinder = () => {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Email[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  const handleSearch = () => {
    if (!linkedinUrl) {
      toast.error('Please enter a LinkedIn URL');
      return;
    }

    if (!linkedinUrl.includes('linkedin.com')) {
      toast.error('Please enter a valid LinkedIn URL');
      return;
    }

    setIsSearching(true);
    setSearchResults([]);

    // Simulate API call delay
    setTimeout(() => {
      // Extract name from URL for the demo
      const urlParts = linkedinUrl.split('/');
      const profile = urlParts[urlParts.length - 1] || urlParts[urlParts.length - 2];
      const name = profile.split('-').slice(0, 2).join('.');
      const domain = 'company.com';

      // Mock results
      const mockResults: Email[] = [
        {
          email: `${name}@${domain}`,
          confidence: 92,
          source: 'LinkedIn',
          lastVerified: '2 days ago',
        },
        {
          email: `${name.split('.')[0]}@${domain}`,
          confidence: 76,
          source: 'Company Website',
          lastVerified: '1 week ago',
        },
        {
          email: `${name.split('.')[0][0]}.${name.split('.')[1]}@${domain}`,
          confidence: 45,
          source: 'Email Pattern Analysis',
          lastVerified: '2 weeks ago',
        },
      ];

      setSearchResults(mockResults);
      setIsSearching(false);
    }, 2000);
  };

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(email);
        toast.success('Email copied to clipboard');
        setTimeout(() => setCopied(null), 2000);
      })
      .catch(() => {
        toast.error('Failed to copy email');
      });
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'bg-green-100 text-green-800';
    if (confidence >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Email Finder</h1>
          <p className="text-muted-foreground">Discover email addresses from LinkedIn profiles</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-xl p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Find Email by LinkedIn URL</h2>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="https://www.linkedin.com/in/john-smith-123456789/"
                    className="w-full pl-10 py-3 pr-4 rounded-md border border-input bg-background"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                  />
                </div>
                <button
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2 whitespace-nowrap"
                  onClick={handleSearch}
                  disabled={isSearching}
                >
                  {isSearching ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4" />
                      Find Email
                    </>
                  )}
                </button>
              </div>
            </div>

            {searchResults.length > 0 ? (
              <div className="animate-fade-in">
                <h3 className="font-medium text-lg mb-3">Results</h3>
                <div className="space-y-3">
                  {searchResults.map((result, index) => (
                    <div key={index} className={`p-4 border ${index === 0 ? 'border-primary' : 'border-input'} rounded-lg ${index === 0 ? 'bg-primary/5' : 'bg-background'}`}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-medium text-lg">{result.email}</div>
                          <div className="text-sm text-muted-foreground">Source: {result.source}</div>
                        </div>
                        <div className={`chip ${getConfidenceColor(result.confidence)}`}>
                          {result.confidence}% Confidence
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-xs text-muted-foreground">
                          Last verified: {result.lastVerified}
                        </div>
                        <button
                          className="text-sm px-3 py-1 rounded-md border border-input hover:bg-muted transition-colors flex items-center gap-1"
                          onClick={() => copyToClipboard(result.email)}
                        >
                          {copied === result.email ? (
                            <>
                              <Check className="h-3 w-3" /> Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" /> Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : isSearching ? (
              <div className="text-center p-8 animate-pulse">
                <RefreshCw className="h-8 w-8 mx-auto mb-4 text-primary animate-spin" />
                <p className="text-muted-foreground">Searching for email addresses...</p>
              </div>
            ) : linkedinUrl ? (
              <div className="text-center p-8 text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-4 opacity-50" />
                <p>Enter a LinkedIn URL and click "Find Email" to start searching</p>
              </div>
            ) : null}
          </div>

          <div className="glass-panel rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Searches</h2>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors border-b border-border last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {['JS', 'AB', 'CD'][i - 1]}
                  </div>
                  <div>
                    <div className="font-medium">
                      {['John Smith', 'Alex Brown', 'Claire Davis'][i - 1]}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {[
                        'john.smith@acme.com',
                        'alex.brown@xyz.com',
                        'claire.davis@techcorp.com',
                      ][i - 1]}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {['2 hours ago', '1 day ago', '3 days ago'][i - 1]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-4">
            <h3 className="font-medium mb-3">Bulk Email Finder</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Need to find multiple emails at once? Upload a CSV file with LinkedIn URLs.
            </p>
            <div className="border border-dashed border-input rounded-lg p-6 text-center">
              <p className="text-sm mb-3">Drop CSV file here or click to upload</p>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md inline-flex items-center gap-2">
                <Linkedin className="h-4 w-4" /> Upload LinkedIn URLs
              </button>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-4">
            <h3 className="font-medium mb-3">Email Verification</h3>
            <p className="text-sm text-muted-foreground mb-4">
              All found emails are automatically verified for deliverability.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <div className="font-medium">Syntax Check</div>
                  <p className="text-muted-foreground">Validates email format</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <div className="font-medium">Domain Check</div>
                  <p className="text-muted-foreground">Confirms domain exists and accepts email</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <div className="font-medium">Mailbox Check</div>
                  <p className="text-muted-foreground">Verifies mailbox without sending email</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Usage</h3>
              <div className="text-xs text-muted-foreground">50/100 searches</div>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden mb-4">
              <div className="h-full bg-primary rounded-full" style={{ width: '50%' }}></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                <span>50 searches remaining</span>
              </div>
              <button className="text-primary flex items-center gap-1">
                Upgrade <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailFinder;
