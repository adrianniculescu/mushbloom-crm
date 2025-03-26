
/**
 * Email Discovery Utilities
 * 
 * This file contains utilities for finding and verifying email addresses.
 * In a real application, these functions would make actual API calls to email discovery services.
 * For this demo, they return mock data.
 */

export interface EmailVerificationResult {
  email: string;
  valid: boolean;
  score: number; // 0-100 confidence score
  reason?: string;
  suggested?: string;
  domain?: {
    valid: boolean;
    hasMailServer: boolean;
    acceptsAll: boolean;
  };
  sources?: string[];
  lastVerified?: string;
}

export interface EmailPattern {
  pattern: string;
  examples: string[];
  frequency: number; // 0-100 percentage of company emails using this pattern
}

// Common email formats
const EMAIL_FORMATS = [
  '{first}.{last}@{domain}',
  '{first}{last}@{domain}',
  '{first[0]}.{last}@{domain}',
  '{first[0]}{last}@{domain}',
  '{last}.{first}@{domain}',
  '{first}-{last}@{domain}',
  '{first}_{last}@{domain}',
  '{last}{first[0]}@{domain}',
];

/**
 * Find possible email addresses for a person based on their name and company domain
 */
export const findEmailAddresses = async (
  firstName: string,
  lastName: string,
  companyDomain: string
): Promise<string[]> => {
  // In a real app, this would call an email discovery API
  console.log(`Finding emails for: ${firstName} ${lastName} at ${companyDomain}`);
  
  // Normalize inputs
  firstName = firstName.toLowerCase();
  lastName = lastName.toLowerCase();
  
  // Generate email variations based on common patterns
  return EMAIL_FORMATS.map(format => {
    return format
      .replace('{first}', firstName)
      .replace('{last}', lastName)
      .replace('{first[0]}', firstName.charAt(0))
      .replace('{last[0]}', lastName.charAt(0))
      .replace('{domain}', companyDomain);
  });
};

/**
 * Get the common email patterns used at a company
 */
export const getCompanyEmailPatterns = async (
  companyDomain: string
): Promise<EmailPattern[]> => {
  // In a real app, this would call an email pattern discovery API
  console.log(`Getting email patterns for: ${companyDomain}`);
  
  // Return mock patterns with randomized frequencies
  return [
    {
      pattern: '{first}.{last}@{domain}',
      examples: [
        `john.smith@${companyDomain}`,
        `emma.johnson@${companyDomain}`
      ],
      frequency: 65 + Math.floor(Math.random() * 20)
    },
    {
      pattern: '{first[0]}{last}@{domain}',
      examples: [
        `jsmith@${companyDomain}`,
        `ejohnson@${companyDomain}`
      ],
      frequency: 20 + Math.floor(Math.random() * 15)
    },
    {
      pattern: '{first}@{domain}',
      examples: [
        `john@${companyDomain}`,
        `emma@${companyDomain}`
      ],
      frequency: 5 + Math.floor(Math.random() * 10)
    }
  ];
};

/**
 * Verify if an email address is valid and deliverable
 */
export const verifyEmail = async (
  email: string
): Promise<EmailVerificationResult> => {
  // In a real app, this would call an email verification API
  console.log(`Verifying email: ${email}`);
  
  // Email regex validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidFormat = emailRegex.test(email);
  
  if (!isValidFormat) {
    return {
      email,
      valid: false,
      score: 0,
      reason: 'Invalid email format',
      domain: {
        valid: false,
        hasMailServer: false,
        acceptsAll: false,
      }
    };
  }
  
  // Extract domain from email
  const domain = email.split('@')[1];
  
  // Return mock verification with random scores
  const random = Math.random();
  const score = random > 0.7 ? 90 + Math.floor(Math.random() * 10) :
                random > 0.4 ? 60 + Math.floor(Math.random() * 30) :
                20 + Math.floor(Math.random() * 40);
  
  return {
    email,
    valid: score > 50,
    score,
    reason: score > 50 ? undefined : 'Mailbox does not exist',
    domain: {
      valid: true,
      hasMailServer: true,
      acceptsAll: random > 0.8
    },
    sources: score > 70 ? [
      random > 0.5 ? 'Company Website' : 'LinkedIn',
      random > 0.7 ? 'Email Pattern Analysis' : 'Public Data',
    ] : [
      random > 0.5 ? 'Email Pattern Analysis' : 'Educated Guess'
    ],
    lastVerified: new Date().toISOString()
  };
};

/**
 * Find a company's email domain from its website or name
 */
export const findCompanyDomain = async (
  companyName: string,
  websiteUrl?: string
): Promise<string | null> => {
  // In a real app, this would search for company domain
  console.log(`Finding company domain for: ${companyName}`, websiteUrl);
  
  if (websiteUrl) {
    // Extract domain from website URL
    try {
      const url = new URL(websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`);
      return url.hostname.replace('www.', '');
    } catch (error) {
      console.error('Invalid URL:', error);
    }
  }
  
  // Mock domain based on company name
  return `${companyName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;
};

/**
 * Find email address from LinkedIn profile URL
 */
export const findEmailFromLinkedIn = async (
  linkedinProfileUrl: string
): Promise<EmailVerificationResult[]> => {
  // In a real app, this would analyze the LinkedIn profile
  console.log(`Finding email from LinkedIn: ${linkedinProfileUrl}`);
  
  // Extract name from LinkedIn URL
  const profilePath = linkedinProfileUrl.split('/').pop() || '';
  const nameParts = profilePath.split('-');
  
  if (nameParts.length < 2) {
    return [];
  }
  
  const firstName = nameParts[0];
  const lastName = nameParts[1];
  
  // Mock company domain
  const companies = ['acme.com', 'example.com', 'company.co', 'enterprise.io', 'tech.com'];
  const domain = companies[Math.floor(Math.random() * companies.length)];
  
  // Generate emails
  const possibleEmails = await findEmailAddresses(firstName, lastName, domain);
  
  // Return random number of verified results
  const numResults = 1 + Math.floor(Math.random() * 3);
  const results: EmailVerificationResult[] = [];
  
  for (let i = 0; i < numResults && i < possibleEmails.length; i++) {
    const score = 90 - (i * 20);
    results.push({
      email: possibleEmails[i],
      valid: score > 50,
      score,
      domain: {
        valid: true,
        hasMailServer: true,
        acceptsAll: false,
      },
      sources: i === 0 ? ['LinkedIn', 'Company Website'] : ['Email Pattern Analysis'],
      lastVerified: new Date().toISOString()
    });
  }
  
  return results;
};

/**
 * Perform bulk email discovery for multiple LinkedIn profiles
 */
export const bulkEmailDiscovery = async (
  linkedinProfileUrls: string[]
): Promise<Record<string, EmailVerificationResult[]>> => {
  // In a real app, this would process multiple profiles in a batch
  console.log(`Bulk email discovery for ${linkedinProfileUrls.length} profiles`);
  
  const results: Record<string, EmailVerificationResult[]> = {};
  
  // Process each URL
  for (const url of linkedinProfileUrls) {
    results[url] = await findEmailFromLinkedIn(url);
  }
  
  return results;
};
