
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Globe, 
  Briefcase, 
  MapPin, 
  MessageSquare, 
  Calendar, 
  Edit2, 
  Trash2, 
  MoreHorizontal, 
  Plus,
  LinkedIn,
  RefreshCw,
  FileText,
  Check,
  X
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface Activity {
  id: string;
  type: 'email' | 'call' | 'meeting' | 'note';
  date: string;
  title: string;
  description?: string;
}

interface Contact {
  id: string;
  name: string;
  company: string;
  position: string;
  email: string;
  phone: string;
  website?: string;
  linkedinUrl: string;
  address?: string;
  status: 'lead' | 'prospect' | 'customer' | 'inactive';
  tags: string[];
  notes?: string;
  createdAt: string;
  lastContacted?: string;
  avatar?: string;
  activities: Activity[];
}

interface Deal {
  id: string;
  name: string;
  value: number;
  stage: 'qualification' | 'meeting' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  closeDate: string;
}

const statusColors = {
  lead: 'bg-blue-100 text-blue-800',
  prospect: 'bg-purple-100 text-purple-800',
  customer: 'bg-green-100 text-green-800',
  inactive: 'bg-gray-100 text-gray-800',
};

const stageColors = {
  'qualification': 'bg-blue-100 text-blue-800',
  'meeting': 'bg-indigo-100 text-indigo-800',
  'proposal': 'bg-purple-100 text-purple-800',
  'negotiation': 'bg-amber-100 text-amber-800',
  'closed-won': 'bg-green-100 text-green-800',
  'closed-lost': 'bg-red-100 text-red-800',
};

const activityIcons = {
  'email': <Mail className="h-4 w-4" />,
  'call': <Phone className="h-4 w-4" />,
  'meeting': <Calendar className="h-4 w-4" />,
  'note': <FileText className="h-4 w-4" />,
};

const activityColors = {
  'email': 'bg-green-100 text-green-800',
  'call': 'bg-blue-100 text-blue-800',
  'meeting': 'bg-purple-100 text-purple-800',
  'note': 'bg-amber-100 text-amber-800',
};

const ContactDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [editMode, setEditMode] = useState(false);
  
  // Sample contact data
  const contact: Contact = {
    id: '1',
    name: 'John Smith',
    company: 'Acme Corporation',
    position: 'Sales Director',
    email: 'john.smith@acme.com',
    phone: '+1 (555) 123-4567',
    website: 'https://acme.com',
    linkedinUrl: 'https://linkedin.com/in/johnsmith',
    address: '123 Business Ave, San Francisco, CA 94107',
    status: 'lead',
    tags: ['manufacturing', 'enterprise', 'decision-maker'],
    notes: 'Met at TechCrunch conference. Interested in our enterprise solution.',
    createdAt: '2023-05-10',
    lastContacted: '2023-06-15',
    activities: [
      {
        id: 'a1',
        type: 'email',
        date: '2023-06-15T10:30:00',
        title: 'Follow-up email sent',
        description: 'Sent information about our enterprise pricing and features.',
      },
      {
        id: 'a2',
        type: 'call',
        date: '2023-06-10T14:00:00',
        title: 'Discovery call',
        description: 'Discussed current pain points and potential solutions.',
      },
      {
        id: 'a3',
        type: 'meeting',
        date: '2023-05-20T09:00:00',
        title: 'Initial meeting at TechCrunch',
        description: 'Met at booth #123. Showed interest in our analytics features.',
      },
      {
        id: 'a4',
        type: 'note',
        date: '2023-05-21T11:15:00',
        title: 'Follow-up items',
        description: 'Need to send whitepaper on industry solutions and schedule demo with technical team.',
      },
    ],
  };

  // Sample deals data
  const deals: Deal[] = [
    {
      id: 'd1',
      name: 'Enterprise Solution',
      value: 75000,
      stage: 'proposal',
      closeDate: '2023-08-15',
    },
    {
      id: 'd2',
      name: 'Department Expansion',
      value: 25000,
      stage: 'qualification',
      closeDate: '2023-09-30',
    },
  ];

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatDateTime = (dateTimeString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateTimeString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex items-center gap-2">
        <button 
          onClick={() => navigate('/contacts')}
          className="p-2 rounded-full hover:bg-muted transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-3xl font-bold">Contact Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-xl p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-semibold">
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{contact.name}</h2>
                  <div className="text-muted-foreground">
                    {contact.position} at {contact.company}
                  </div>
                  <div className="flex mt-2 gap-1">
                    <span className={`chip ${statusColors[contact.status]}`}>
                      {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                    </span>
                    {contact.tags.map((tag, i) => (
                      <span key={i} className="chip bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-md hover:bg-muted transition-colors">
                  <Edit2 className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-md hover:bg-muted transition-colors">
                  <Trash2 className="h-5 w-5 text-destructive" />
                </button>
                <button className="p-2 rounded-md hover:bg-muted transition-colors">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex border-b border-border">
              <button 
                className={`px-4 py-2 font-medium text-sm ${activeTab === 'overview' ? 'border-b-2 border-primary' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-2 font-medium text-sm ${activeTab === 'activity' ? 'border-b-2 border-primary' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab('activity')}
              >
                Activity
              </button>
              <button 
                className={`px-4 py-2 font-medium text-sm ${activeTab === 'deals' ? 'border-b-2 border-primary' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab('deals')}
              >
                Deals
              </button>
              <button 
                className={`px-4 py-2 font-medium text-sm ${activeTab === 'notes' ? 'border-b-2 border-primary' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab('notes')}
              >
                Notes
              </button>
            </div>

            <div className="py-4">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium mb-1">Contact Info</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                            {contact.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <a href={`tel:${contact.phone}`} className="hover:text-primary">
                            {contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <LinkedIn className="h-4 w-4 text-muted-foreground" />
                          <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            LinkedIn Profile
                          </a>
                          <button className="ml-1 text-xs px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground">
                            View
                          </button>
                        </div>
                        {contact.website && (
                          <div className="flex items-center gap-2 text-sm">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                              {contact.website.replace(/^https?:\/\//, '')}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-1">Company Info</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Briefcase className="h-4 w-4 text-muted-foreground" />
                          <span>{contact.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Briefcase className="h-4 w-4 text-muted-foreground" />
                          <span>{contact.position}</span>
                        </div>
                        {contact.address && (
                          <div className="flex items-start gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                            <span>{contact.address}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Recent Activity</h3>
                    <div className="space-y-3">
                      {contact.activities.slice(0, 3).map((activity) => (
                        <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                          <div className={`p-2 rounded-md ${activityColors[activity.type]}`}>
                            {activityIcons[activity.type]}
                          </div>
                          <div>
                            <div className="font-medium">{activity.title}</div>
                            <div className="text-xs text-muted-foreground">
                              {formatDateTime(activity.date)}
                            </div>
                            {activity.description && (
                              <div className="text-sm mt-1">{activity.description}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button 
                      className="text-sm text-primary flex items-center gap-1 mt-3"
                      onClick={() => setActiveTab('activity')}
                    >
                      View all activity
                    </button>
                  </div>

                  {deals.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium mb-2">Deals</h3>
                      <div className="space-y-3">
                        {deals.map((deal) => (
                          <div key={deal.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors">
                            <div>
                              <div className="font-medium">{deal.name}</div>
                              <div className="text-xs text-muted-foreground">
                                Close Date: {formatDate(deal.closeDate)}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">${deal.value.toLocaleString()}</div>
                              <div className={`chip ${stageColors[deal.stage]}`}>
                                {deal.stage.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'activity' && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Activity Timeline</h3>
                    <div className="flex gap-2">
                      <button className="text-xs px-2 py-1 rounded-md border border-input flex items-center gap-1">
                        <Plus className="h-3 w-3" /> Add Activity
                      </button>
                      <button className="text-xs px-2 py-1 rounded-md border border-input flex items-center gap-1">
                        <RefreshCw className="h-3 w-3" /> Refresh
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {contact.activities.map((activity, index) => (
                      <div key={activity.id} className="relative">
                        {index < contact.activities.length - 1 && (
                          <div className="absolute top-8 bottom-0 left-5 w-0.5 bg-border"></div>
                        )}
                        <div className="flex items-start gap-4">
                          <div className={`p-2 rounded-md ${activityColors[activity.type]} z-10`}>
                            {activityIcons[activity.type]}
                          </div>
                          <div className="flex-1 glass-panel rounded-lg p-3">
                            <div className="flex justify-between">
                              <div className="font-medium">{activity.title}</div>
                              <div className="text-xs text-muted-foreground">
                                {formatDateTime(activity.date)}
                              </div>
                            </div>
                            {activity.description && (
                              <div className="mt-2 text-sm">{activity.description}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'deals' && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Deals</h3>
                    <button className="text-xs px-2 py-1 rounded-md border border-input flex items-center gap-1">
                      <Plus className="h-3 w-3" /> New Deal
                    </button>
                  </div>

                  {deals.length > 0 ? (
                    <div className="space-y-4">
                      {deals.map((deal) => (
                        <div key={deal.id} className="glass-panel rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <h4 className="font-medium">{deal.name}</h4>
                            <div className="font-medium">${deal.value.toLocaleString()}</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className={`chip ${stageColors[deal.stage]}`}>
                              {deal.stage.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Closing {formatDate(deal.closeDate)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-6 border border-dashed border-border rounded-lg">
                      <h4 className="font-medium mb-2">No deals yet</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Create your first deal to start tracking your sales pipeline.
                      </p>
                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2 mx-auto">
                        <Plus className="h-4 w-4" /> Create Deal
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'notes' && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Notes</h3>
                    <div className="flex gap-2">
                      {editMode ? (
                        <>
                          <button 
                            onClick={() => setEditMode(false)}
                            className="text-xs px-2 py-1 rounded-md border border-green-500 text-green-600 flex items-center gap-1"
                          >
                            <Check className="h-3 w-3" /> Save
                          </button>
                          <button 
                            onClick={() => setEditMode(false)}
                            className="text-xs px-2 py-1 rounded-md border border-destructive text-destructive flex items-center gap-1"
                          >
                            <X className="h-3 w-3" /> Cancel
                          </button>
                        </>
                      ) : (
                        <button 
                          onClick={() => setEditMode(true)}
                          className="text-xs px-2 py-1 rounded-md border border-input flex items-center gap-1"
                        >
                          <Edit2 className="h-3 w-3" /> Edit Notes
                        </button>
                      )}
                    </div>
                  </div>

                  {editMode ? (
                    <textarea 
                      className="w-full min-h-[200px] p-3 rounded-lg border border-input" 
                      defaultValue={contact.notes}
                    />
                  ) : contact.notes ? (
                    <div className="p-4 rounded-lg border border-input">
                      {contact.notes}
                    </div>
                  ) : (
                    <div className="text-center p-6 border border-dashed border-border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-4">
                        No notes yet. Add some notes about this contact.
                      </p>
                      <button 
                        onClick={() => setEditMode(true)}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2 mx-auto"
                      >
                        <Plus className="h-4 w-4" /> Add Notes
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-4">
            <h3 className="font-medium mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="p-3 border border-input rounded-md hover:bg-muted transition-colors text-sm flex flex-col items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>Send Email</span>
              </button>
              <button className="p-3 border border-input rounded-md hover:bg-muted transition-colors text-sm flex flex-col items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Log Call</span>
              </button>
              <button className="p-3 border border-input rounded-md hover:bg-muted transition-colors text-sm flex flex-col items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule</span>
              </button>
              <button className="p-3 border border-input rounded-md hover:bg-muted transition-colors text-sm flex flex-col items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <span>AI Message</span>
              </button>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-4">
            <h3 className="font-medium mb-3">Email Finder</h3>
            <div className="p-4 border border-dashed border-border rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Find verified email addresses using LinkedIn profile
              </p>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2 mx-auto">
                <LinkedIn className="h-4 w-4" /> Find Email
              </button>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Timeline</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-primary"></div>
                <div>
                  <div className="font-medium">Created contact</div>
                  <div className="text-xs text-muted-foreground">
                    {formatDate(contact.createdAt)}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-primary"></div>
                <div>
                  <div className="font-medium">Added tags</div>
                  <div className="text-xs text-muted-foreground">
                    {formatDate(contact.createdAt)}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-primary"></div>
                <div>
                  <div className="font-medium">Changed status to Lead</div>
                  <div className="text-xs text-muted-foreground">
                    {formatDate(contact.createdAt)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
