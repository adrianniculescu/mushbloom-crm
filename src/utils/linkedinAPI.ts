
/**
 * LinkedIn API Integration Utilities
 * 
 * This file contains utilities for interacting with LinkedIn's API.
 * In a real application, these functions would make actual API calls.
 * For this demo, they return mock data.
 */

// Interface for LinkedIn profile data
export interface LinkedInProfile {
  id: string;
  firstName: string;
  lastName: string;
  headline: string;
  profilePictureUrl?: string;
  currentPosition?: {
    title: string;
    company: string;
    startDate: string;
  };
  location?: string;
  connectionDegree?: 1 | 2 | 3;
  sharedConnections?: number;
  company?: {
    id: string;
    name: string;
    industry: string;
    size: string;
    linkedinUrl: string;
  };
}

// Mock function to fetch a LinkedIn profile
export const fetchLinkedInProfile = async (linkedinUrl: string): Promise<LinkedInProfile> => {
  // In a real app, this would call LinkedIn's API
  console.log(`Fetching LinkedIn profile: ${linkedinUrl}`);
  
  // Extract username from URL
  const username = linkedinUrl.split('/').pop() || '';
  
  // Generate mock data based on URL
  const [firstName, lastName] = username.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  );
  
  // Return mock profile data
  return {
    id: `li-${Date.now()}`,
    firstName: firstName || 'John',
    lastName: lastName || 'Smith',
    headline: `${Math.random() > 0.5 ? 'Senior' : 'Director of'} ${Math.random() > 0.5 ? 'Marketing' : 'Sales'} at ${Math.random() > 0.5 ? 'Acme Corporation' : 'XYZ Inc'}`,
    currentPosition: {
      title: `${Math.random() > 0.5 ? 'Senior' : 'Director of'} ${Math.random() > 0.5 ? 'Marketing' : 'Sales'}`,
      company: Math.random() > 0.5 ? 'Acme Corporation' : 'XYZ Inc',
      startDate: '2021-06'
    },
    location: Math.random() > 0.5 ? 'San Francisco, CA' : 'New York, NY',
    connectionDegree: Math.random() > 0.7 ? 1 : Math.random() > 0.4 ? 2 : 3,
    sharedConnections: Math.floor(Math.random() * 15),
    company: {
      id: 'company-123',
      name: Math.random() > 0.5 ? 'Acme Corporation' : 'XYZ Inc',
      industry: Math.random() > 0.5 ? 'Technology' : 'Marketing and Advertising',
      size: Math.random() > 0.5 ? '201-500 employees' : '51-200 employees',
      linkedinUrl: `https://www.linkedin.com/company/${Math.random() > 0.5 ? 'acme-corporation' : 'xyz-inc'}`
    }
  };
};

// Mock function to search for LinkedIn profiles
export const searchLinkedInProfiles = async (
  query: string, 
  filters?: { 
    company?: string; 
    location?: string; 
    industry?: string;
    connectionDegree?: 1 | 2 | 3;
  }
): Promise<LinkedInProfile[]> => {
  // In a real app, this would call LinkedIn's API with search parameters
  console.log(`Searching LinkedIn profiles: ${query}`, filters);
  
  // Return mock search results
  return Array(5).fill(null).map((_, i) => ({
    id: `li-search-${i}`,
    firstName: ['John', 'Sarah', 'Michael', 'Emma', 'Robert'][i],
    lastName: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'][i],
    headline: `${['Senior', 'Director of', 'VP of', 'Head of', 'Lead'][i]} ${['Marketing', 'Sales', 'Operations', 'Product', 'Engineering'][i]} at ${['Acme Corporation', 'XYZ Inc', 'ABC Tech', 'Global Solutions', 'Innovative Corp'][i]}`,
    currentPosition: {
      title: `${['Senior', 'Director of', 'VP of', 'Head of', 'Lead'][i]} ${['Marketing', 'Sales', 'Operations', 'Product', 'Engineering'][i]}`,
      company: ['Acme Corporation', 'XYZ Inc', 'ABC Tech', 'Global Solutions', 'Innovative Corp'][i],
      startDate: '2021-06'
    },
    location: ['San Francisco, CA', 'New York, NY', 'Chicago, IL', 'Austin, TX', 'Seattle, WA'][i],
    connectionDegree: [1, 2, 2, 3, 2][i] as 1 | 2 | 3,
    sharedConnections: [12, 5, 0, 3, 8][i],
  }));
};

// Mock function to get company information
export const getCompanyInfo = async (companyLinkedinUrl: string): Promise<LinkedInProfile['company']> => {
  // In a real app, this would call LinkedIn's API
  console.log(`Getting company info: ${companyLinkedinUrl}`);
  
  // Extract company name from URL
  const companyName = companyLinkedinUrl.split('/').pop() || '';
  
  // Return mock company data
  return {
    id: `company-${Date.now()}`,
    name: companyName.split('-').map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join(' ') || 'Unknown Company',
    industry: Math.random() > 0.5 ? 'Technology' : 'Marketing and Advertising',
    size: Math.random() > 0.5 ? '201-500 employees' : '51-200 employees',
    linkedinUrl: companyLinkedinUrl
  };
};

// Mock authentication with LinkedIn
export const authenticateWithLinkedIn = async (
  clientId: string, 
  redirectUri: string
): Promise<{ success: boolean; authUrl?: string; error?: string }> => {
  // In a real app, this would create an OAuth URL and redirect
  console.log(`Authenticating with LinkedIn: ${clientId}, ${redirectUri}`);
  
  if (!clientId || !redirectUri) {
    return {
      success: false,
      error: 'Missing client ID or redirect URI'
    };
  }
  
  return {
    success: true,
    authUrl: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=r_liteprofile%20r_emailaddress`
  };
};

// Mock function to handle LinkedIn OAuth callback
export const handleLinkedInCallback = async (
  code: string, 
  clientId: string, 
  clientSecret: string, 
  redirectUri: string
): Promise<{ 
  success: boolean; 
  accessToken?: string; 
  expiresIn?: number;
  error?: string 
}> => {
  // In a real app, this would exchange the code for an access token
  console.log(`Handling LinkedIn callback: ${code}`);
  
  if (!code) {
    return {
      success: false,
      error: 'Missing authorization code'
    };
  }
  
  // Return mock access token
  return {
    success: true,
    accessToken: `mock_access_token_${Date.now()}`,
    expiresIn: 3600 // 1 hour
  };
};
