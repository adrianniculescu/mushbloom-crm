
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Home', href: isHomePage ? '#home' : '/' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Portfolio', href: '/portfolio/websites' },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const serviceItems = [
    { name: 'LLMboost', href: '/llmboost', description: 'AI Search Visibility' },
    { name: 'Newswire', href: '/newswire', description: 'Niche PR Distribution' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
                      className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-lg flex items-center gap-1"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl overflow-hidden">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-4 py-3 hover:bg-white/10 transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="text-white font-medium">{service.name}</div>
                            <div className="text-gray-400 text-xs">{service.description}</div>
                          </Link>
                        ))}
                        {isHomePage && (
                          <a
                            href="#services"
                            className="block px-4 py-3 hover:bg-white/10 transition-colors border-t border-white/10"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="text-gray-300 text-sm">View All Services ↓</div>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  item.href.startsWith('/') || item.href.startsWith('#') ? (
                    item.href.startsWith('/') ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-lg"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-lg"
                      >
                        {item.name}
                      </a>
                    )
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-lg"
                    >
                      {item.name}
                    </a>
                  )
                )
              ))}
              
              {/* Direct links to key services */}
              <Link
                to="/llmboost"
                className="text-purple-400 hover:text-purple-300 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-purple-500/10 rounded-lg"
              >
                LLMboost
              </Link>
              <Link
                to="/newswire"
                className="text-blue-400 hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-blue-500/10 rounded-lg"
              >
                Newswire
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-lg">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <div className="border-t border-white/10 pt-2 mt-2">
              <div className="px-3 py-1 text-xs text-gray-500 uppercase">Services</div>
              <Link
                to="/llmboost"
                className="text-purple-400 hover:text-purple-300 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                LLMboost
              </Link>
              <Link
                to="/newswire"
                className="text-blue-400 hover:text-blue-300 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Newswire
              </Link>
            </div>
            
            {isHomePage && (
              <>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
