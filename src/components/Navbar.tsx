
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Briefcase, 
  MessageSquare, 
  BarChart, 
  Settings, 
  Menu, 
  X, 
  Search,
  Bell
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Contacts', path: '/contacts', icon: <Users className="h-5 w-5" /> },
    { name: 'Deals', path: '/deals', icon: <Briefcase className="h-5 w-5" /> },
    { name: 'Messages', path: '/messages', icon: <MessageSquare className="h-5 w-5" /> },
    { name: 'Reports', path: '/reports', icon: <BarChart className="h-5 w-5" /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 glass-panel h-screen fixed left-0 top-0 z-20 px-4 py-6">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">LinkSmart CRM</h1>
        </div>
        
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path}
              className={({ isActive }) => 
                `sidebar-item ${isActive ? 'sidebar-item-active' : 'sidebar-item-inactive'}`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
        
        <div className="mt-auto pt-4 border-t border-border">
          <NavLink 
            to="/settings" 
            className={({ isActive }) => 
              `sidebar-item ${isActive ? 'sidebar-item-active' : 'sidebar-item-inactive'}`
            }
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </NavLink>
        </div>
      </aside>

      {/* Mobile header */}
      <header className="md:hidden glass-panel fixed top-0 left-0 right-0 z-20 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 rounded-md text-muted-foreground"
        >
          <Menu className="h-6 w-6" />
        </button>
        
        <h1 className="text-xl font-semibold">LinkSmart CRM</h1>
        
        <button className="p-2 rounded-md text-muted-foreground">
          <Bell className="h-6 w-6" />
        </button>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden animate-fade-in">
          <div className="flex flex-col h-full p-4">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-semibold tracking-tight">LinkSmart CRM</h1>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-muted-foreground"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="flex-1 space-y-2">
              {navItems.map((item) => (
                <NavLink 
                  key={item.name} 
                  to={item.path}
                  className={({ isActive }) => 
                    `sidebar-item ${isActive ? 'sidebar-item-active' : 'sidebar-item-inactive'}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              ))}
              
              <NavLink 
                to="/settings" 
                className={({ isActive }) => 
                  `sidebar-item ${isActive ? 'sidebar-item-active' : 'sidebar-item-inactive'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
