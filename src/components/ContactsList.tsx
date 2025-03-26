import React, { useState } from 'react';
import { Search, Filter, Plus, Trash, Mail, Linkedin, Phone, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the Contact type
interface Contact {
  id: string;
  name: string;
  company: string;
  position: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  status: 'lead' | 'prospect' | 'customer' | 'inactive';
  lastContacted: string;
  tags: string[];
}

const statusColors = {
  lead: 'bg-blue-100 text-blue-800',
  prospect: 'bg-purple-100 text-purple-800',
  customer: 'bg-green-100 text-green-800',
  inactive: 'bg-gray-100 text-gray-800',
};

const ContactsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  // Sample data
  const contacts: Contact[] = [
    {
      id: '1',
      name: 'John Smith',
      company: 'Acme Corporation',
      position: 'Sales Director',
      email: 'john.smith@acme.com',
      phone: '+1 (555) 123-4567',
      linkedinUrl: 'https://linkedin.com/in/johnsmith',
      status: 'lead',
      lastContacted: '2023-06-15',
      tags: ['manufacturing', 'enterprise'],
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      company: 'Globex Inc.',
      position: 'CTO',
      email: 'sarah.j@globex.co',
      phone: '+1 (555) 987-6543',
      linkedinUrl: 'https://linkedin.com/in/sarahjohnson',
      status: 'customer',
      lastContacted: '2023-07-01',
      tags: ['tech', 'decision maker'],
    },
    {
      id: '3',
      name: 'Michael Brown',
      company: 'XYZ Solutions',
      position: 'Procurement Manager',
      email: 'michael.b@xyzsolutions.com',
      phone: '+1 (555) 246-8102',
      linkedinUrl: 'https://linkedin.com/in/michaelbrown',
      status: 'prospect',
      lastContacted: '2023-06-28',
      tags: ['healthcare', 'mid-market'],
    },
    {
      id: '4',
      name: 'Emma Davis',
      company: 'ABC Technologies',
      position: 'CEO',
      email: 'emma.davis@abctech.io',
      phone: '+1 (555) 369-7812',
      linkedinUrl: 'https://linkedin.com/in/emmadavis',
      status: 'lead',
      lastContacted: '2023-06-10',
      tags: ['startup', 'decision maker'],
    },
    {
      id: '5',
      name: 'Robert Wilson',
      company: 'Oceanic Partners',
      position: 'Marketing Director',
      email: 'rwilson@oceanicpartners.com',
      phone: '+1 (555) 840-2367',
      linkedinUrl: 'https://linkedin.com/in/robertwilson',
      status: 'inactive',
      lastContacted: '2023-05-20',
      tags: ['finance', 'enterprise'],
    },
    {
      id: '6',
      name: 'Jennifer Taylor',
      company: 'Initech LLC',
      position: 'VP of Sales',
      email: 'jennifer.t@initech.biz',
      phone: '+1 (555) 123-9876',
      linkedinUrl: 'https://linkedin.com/in/jennifertaylor',
      status: 'customer',
      lastContacted: '2023-07-03',
      tags: ['software', 'enterprise'],
    },
  ];

  // Filter contacts based on search term and status filter
  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus ? contact.status === filterStatus : true;
    
    return matchesSearch && matchesStatus;
  });

  const toggleContactSelection = (id: string) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter(contactId => contactId !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedContacts.length === filteredContacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(filteredContacts.map(c => c.id));
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Contacts</h1>
          <p className="text-muted-foreground">Manage your network and relationships</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md">
          <Plus className="h-4 w-4" /> Add Contact
        </button>
      </div>

      <div className="glass-panel rounded-xl mb-6">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-10 py-2 pr-4 rounded-md border border-input bg-background"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-input rounded-md">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            <select 
              className="px-4 py-2 border border-input rounded-md bg-background"
              value={filterStatus || ''}
              onChange={(e) => setFilterStatus(e.target.value || null)}
            >
              <option value="">All Status</option>
              <option value="lead">Leads</option>
              <option value="prospect">Prospects</option>
              <option value="customer">Customers</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {selectedContacts.length > 0 && (
          <div className="p-3 border-b border-border bg-muted/30 flex justify-between items-center">
            <div className="text-sm">
              {selectedContacts.length} {selectedContacts.length === 1 ? 'contact' : 'contacts'} selected
            </div>
            <div className="flex gap-2">
              <button className="text-sm text-destructive flex items-center gap-1">
                <Trash className="h-4 w-4" /> Delete
              </button>
              <button className="text-sm text-primary flex items-center gap-1">
                <Mail className="h-4 w-4" /> Email
              </button>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left font-medium">
                  <input 
                    type="checkbox" 
                    checked={selectedContacts.length === filteredContacts.length && filteredContacts.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-input"
                  />
                </th>
                <th className="p-4 text-left font-medium">Name</th>
                <th className="p-4 text-left font-medium">Company</th>
                <th className="p-4 text-left font-medium">Status</th>
                <th className="p-4 text-left font-medium">Last Contacted</th>
                <th className="p-4 text-left font-medium">Tags</th>
                <th className="p-4 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="p-4">
                    <input 
                      type="checkbox" 
                      checked={selectedContacts.includes(contact.id)}
                      onChange={() => toggleContactSelection(contact.id)}
                      className="rounded border-input"
                    />
                  </td>
                  <td className="p-4">
                    <Link to={`/contacts/${contact.id}`} className="font-medium hover:text-primary">
                      {contact.name}
                    </Link>
                    <div className="text-xs text-muted-foreground">{contact.position}</div>
                  </td>
                  <td className="p-4">{contact.company}</td>
                  <td className="p-4">
                    <span className={`chip ${statusColors[contact.status]}`}>
                      {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4">
                    {new Date(contact.lastContacted).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {contact.tags.map((tag, index) => (
                        <span key={index} className="chip bg-secondary text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="p-1 rounded-md hover:bg-muted">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="p-1 rounded-md hover:bg-muted">
                        <Linkedin className="h-4 w-4" />
                      </button>
                      <button className="p-1 rounded-md hover:bg-muted">
                        <Phone className="h-4 w-4" />
                      </button>
                      <button className="p-1 rounded-md hover:bg-muted">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredContacts.length === 0 && (
          <div className="p-8 text-center">
            <div className="text-muted-foreground mb-2">No contacts found</div>
            <p className="text-sm text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactsList;
