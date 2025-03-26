
import React, { useState } from 'react';
import { Search, Filter, Plus, MoreHorizontal, User, Calendar, DollarSign } from 'lucide-react';

// Define deal stages
const stages = [
  { id: 'qualification', name: 'Qualification' },
  { id: 'meeting', name: 'Meeting' },
  { id: 'proposal', name: 'Proposal' },
  { id: 'negotiation', name: 'Negotiation' },
  { id: 'closed-won', name: 'Closed Won' },
  { id: 'closed-lost', name: 'Closed Lost' },
];

// Define the Deal type
interface Deal {
  id: string;
  name: string;
  company: string;
  value: number;
  stage: string;
  closeDate: string;
  owner: string;
  contact: string;
  probability?: number;
  tags?: string[];
}

// Sample deals data
const dealsData: Deal[] = [
  {
    id: '1',
    name: 'Enterprise Subscription',
    company: 'Acme Corporation',
    value: 75000,
    stage: 'proposal',
    closeDate: '2023-08-15',
    owner: 'Jane Cooper',
    contact: 'John Smith',
    probability: 65,
    tags: ['enterprise', 'subscription'],
  },
  {
    id: '2',
    name: 'Department Expansion',
    company: 'XYZ Solutions',
    value: 35000,
    stage: 'meeting',
    closeDate: '2023-09-22',
    owner: 'Jane Cooper',
    contact: 'Michael Brown',
    probability: 40,
    tags: ['expansion'],
  },
  {
    id: '3',
    name: 'Software License',
    company: 'Globex Inc',
    value: 18500,
    stage: 'qualification',
    closeDate: '2023-09-30',
    owner: 'Robert Fox',
    contact: 'Sarah Johnson',
    probability: 20,
  },
  {
    id: '4',
    name: 'Annual Contract',
    company: 'TechCorp',
    value: 120000,
    stage: 'negotiation',
    closeDate: '2023-08-30',
    owner: 'Jane Cooper',
    contact: 'Emily Davis',
    probability: 80,
    tags: ['annual', 'large-deal'],
  },
  {
    id: '5',
    name: 'Custom Integration',
    company: 'Initech LLC',
    value: 45000,
    stage: 'closed-won',
    closeDate: '2023-07-15',
    owner: 'Robert Fox',
    contact: 'Jennifer Taylor',
    probability: 100,
    tags: ['services', 'integration'],
  },
  {
    id: '6',
    name: 'Support Package',
    company: 'Oceanic Partners',
    value: 12500,
    stage: 'closed-lost',
    closeDate: '2023-07-20',
    owner: 'Jane Cooper',
    contact: 'Robert Wilson',
    probability: 0,
    tags: ['support', 'services'],
  },
  {
    id: '7',
    name: 'Pilot Project',
    company: 'ABC Technologies',
    value: 8750,
    stage: 'proposal',
    closeDate: '2023-08-25',
    owner: 'Robert Fox',
    contact: 'Emma Davis',
    probability: 60,
    tags: ['pilot', 'small-deal'],
  },
];

// Card component for each deal
const DealCard = ({ deal }: { deal: Deal }) => {
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0 
    }).format(value);
  };

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Determine styles based on deal status
  const getStatusStyle = (stage: string) => {
    switch (stage) {
      case 'qualification':
        return 'bg-blue-100 text-blue-800';
      case 'meeting':
        return 'bg-indigo-100 text-indigo-800';
      case 'proposal':
        return 'bg-purple-100 text-purple-800';
      case 'negotiation':
        return 'bg-amber-100 text-amber-800';
      case 'closed-won':
        return 'bg-green-100 text-green-800';
      case 'closed-lost':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="glass-panel rounded-lg p-4 mb-3 card-hover cursor-move">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{deal.name}</h3>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
      <div className="text-sm text-muted-foreground mb-3">{deal.company}</div>
      <div className="flex justify-between items-center mb-3">
        <div className="font-semibold">{formatCurrency(deal.value)}</div>
        <div className={`chip ${getStatusStyle(deal.stage)}`}>
          {deal.probability !== undefined ? `${deal.probability}%` : 'N/A'}
        </div>
      </div>
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <User className="h-3 w-3" />
          <span>{deal.contact}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          <span>{formatDate(deal.closeDate)}</span>
        </div>
      </div>
    </div>
  );
};

const DealsBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDeals, setFilteredDeals] = useState(dealsData);

  // Filter deals based on search term
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredDeals(dealsData);
    } else {
      const filtered = dealsData.filter(deal => 
        deal.name.toLowerCase().includes(term.toLowerCase()) ||
        deal.company.toLowerCase().includes(term.toLowerCase()) ||
        deal.contact.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredDeals(filtered);
    }
  };

  // Group deals by stage
  const dealsByStage = stages.reduce((acc, stage) => {
    acc[stage.id] = filteredDeals.filter(deal => deal.stage === stage.id);
    return acc;
  }, {} as Record<string, Deal[]>);

  // Calculate total value per stage
  const stageTotals = Object.entries(dealsByStage).reduce((acc, [stage, deals]) => {
    acc[stage] = deals.reduce((sum, deal) => sum + deal.value, 0);
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Deals</h1>
          <p className="text-muted-foreground">Manage your sales pipeline</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md">
          <Plus className="h-4 w-4" /> Add Deal
        </button>
      </div>

      <div className="glass-panel rounded-xl mb-6 p-4 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search deals..."
            className="w-full pl-10 py-2 pr-4 rounded-md border border-input bg-background"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-input rounded-md">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <select className="px-4 py-2 border border-input rounded-md bg-background">
            <option value="">All Owners</option>
            <option value="jane">Jane Cooper</option>
            <option value="robert">Robert Fox</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto pb-6">
        <div className="flex gap-4 min-w-[1200px]">
          {stages.map(stage => (
            <div key={stage.id} className="flex-1 w-[250px] min-w-[250px]">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">
                  {stage.name} ({dealsByStage[stage.id]?.length || 0})
                </h3>
                <div className="text-sm font-medium flex items-center">
                  <DollarSign className="h-3 w-3 mr-1" />
                  {Intl.NumberFormat('en-US', { 
                    style: 'currency', 
                    currency: 'USD',
                    maximumFractionDigits: 0,
                    notation: 'compact'
                  }).format(stageTotals[stage.id] || 0)}
                </div>
              </div>
              
              <div className={`p-3 rounded-lg bg-secondary/50 min-h-[500px] ${dealsByStage[stage.id]?.length > 0 ? '' : 'flex items-center justify-center'}`}>
                {dealsByStage[stage.id]?.length > 0 ? (
                  dealsByStage[stage.id].map(deal => (
                    <DealCard key={deal.id} deal={deal} />
                  ))
                ) : (
                  <div className="text-center text-muted-foreground text-sm">
                    <div className="mb-2">No deals</div>
                    <button className="text-xs px-2 py-1 rounded-md border border-input inline-flex items-center gap-1">
                      <Plus className="h-3 w-3" /> Add Deal
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsBoard;
