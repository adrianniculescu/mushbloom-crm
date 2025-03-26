
import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Calendar, 
  MessageSquare, 
  Activity,
  ArrowRight,
  Mail,
  BarChart,
  Briefcase
} from 'lucide-react';

const StatCard = ({ 
  title, 
  value, 
  icon, 
  change, 
  changeType 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
}) => {
  const changeColorClass = {
    positive: 'text-green-500',
    negative: 'text-red-500',
    neutral: 'text-gray-500'
  }[changeType];

  return (
    <div className="glass-panel rounded-xl p-5 card-hover">
      <div className="flex justify-between items-start mb-4">
        <div className="text-muted-foreground">{title}</div>
        <div className="p-2 bg-secondary rounded-lg">{icon}</div>
      </div>
      <div className="text-2xl font-semibold mb-1">{value}</div>
      <div className={`text-xs flex gap-1 items-center ${changeColorClass}`}>
        {change}
        {changeType === 'positive' && <TrendingUp className="h-3 w-3" />}
        {changeType === 'negative' && <TrendingUp className="h-3 w-3 rotate-180" />}
      </div>
    </div>
  );
};

const UpcomingActivity = ({
  title,
  date,
  type,
  contact
}: {
  title: string;
  date: string;
  type: 'call' | 'meeting' | 'email' | 'task';
  contact: string;
}) => {
  const typeIcons = {
    call: <Mail className="h-4 w-4" />,
    meeting: <Calendar className="h-4 w-4" />,
    email: <Mail className="h-4 w-4" />,
    task: <Activity className="h-4 w-4" />
  };

  const typeColors = {
    call: 'bg-blue-100 text-blue-800',
    meeting: 'bg-purple-100 text-purple-800',
    email: 'bg-green-100 text-green-800',
    task: 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div className="p-3 hover:bg-secondary rounded-lg transition-colors">
      <div className="flex justify-between mb-1">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">{date}</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-xs text-muted-foreground">{contact}</div>
        <div className={`chip ${typeColors[type]} flex items-center gap-1.5`}>
          {typeIcons[type]}
          <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  // Sample data
  const stats = [
    { title: 'Total Contacts', value: '1,293', icon: <Users className="h-5 w-5" />, change: '+5% from last month', changeType: 'positive' as const },
    { title: 'Open Deals', value: '67', icon: <Briefcase className="h-5 w-5" />, change: '+12% from last month', changeType: 'positive' as const },
    { title: 'Messages Sent', value: '482', icon: <MessageSquare className="h-5 w-5" />, change: '-3% from last month', changeType: 'negative' as const },
    { title: 'Conversion Rate', value: '24%', icon: <BarChart className="h-5 w-5" />, change: 'Same as last month', changeType: 'neutral' as const },
  ];

  const activities = [
    { title: 'Follow up with client', date: 'Today, 4:00 PM', type: 'call' as const, contact: 'John Smith - Acme Inc.' },
    { title: 'Product Demo', date: 'Tomorrow, 10:00 AM', type: 'meeting' as const, contact: 'Sarah Johnson - XYZ Corp' },
    { title: 'Proposal Draft', date: 'Wed, 5:00 PM', type: 'task' as const, contact: 'Mike Williams - ABC Solutions' },
    { title: 'Send contract', date: 'Fri, 11:00 AM', type: 'email' as const, contact: 'Emily Davis - Tech Systems' },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back. Here's what's happening with your CRM today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="glass-panel rounded-xl p-5 col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Sales Performance</h2>
            <div className="text-sm text-primary">
              <select className="bg-transparent border-none outline-none">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Quarter</option>
                <option>Year</option>
              </select>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center bg-secondary/50 rounded-lg">
            <BarChart3 className="h-24 w-24 text-muted-foreground/30" />
          </div>
        </div>

        <div className="glass-panel rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Upcoming Activities</h2>
            <div className="text-sm text-primary flex items-center">
              See All <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>
          <div className="space-y-2">
            {activities.map((activity, index) => (
              <UpcomingActivity key={index} {...activity} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Contacts</h2>
            <div className="text-sm text-primary flex items-center">
              See All <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>
          <div className="space-y-4">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="flex items-center p-2 hover:bg-secondary rounded-lg transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  {['JD', 'AB', 'CD', 'EF', 'GH'][i]}
                </div>
                <div>
                  <div className="font-medium">{['John Doe', 'Alice Brown', 'Chris Davis', 'Emma Foster', 'George Harris'][i]}</div>
                  <div className="text-xs text-muted-foreground">{['Acme Inc.', 'XYZ Corp', 'ABC Tech', 'Global Systems', 'Future Labs'][i]}</div>
                </div>
                <div className="ml-auto text-xs text-muted-foreground">
                  {['3 days ago', '1 week ago', '2 weeks ago', '3 weeks ago', '1 month ago'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Deals</h2>
            <div className="text-sm text-primary flex items-center">
              See All <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>
          <div className="space-y-4">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="flex items-center p-2 hover:bg-secondary rounded-lg transition-colors">
                <div>
                  <div className="font-medium">{['Product Subscription', 'Enterprise Solution', 'Software License', 'Consulting Services', 'Custom Development'][i]}</div>
                  <div className="text-xs text-muted-foreground">{['Acme Inc.', 'XYZ Corp', 'ABC Tech', 'Global Systems', 'Future Labs'][i]}</div>
                </div>
                <div className="ml-auto">
                  <div className="font-medium text-right">{['$12,000', '$45,000', '$8,500', '$22,000', '$17,500'][i]}</div>
                  <div className={`chip text-right ${['bg-amber-100 text-amber-800', 'bg-green-100 text-green-800', 'bg-blue-100 text-blue-800', 'bg-purple-100 text-purple-800', 'bg-red-100 text-red-800'][i]}`}>
                    {['Negotiation', 'Closed Won', 'Proposal', 'Discovery', 'Qualified'][i]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
