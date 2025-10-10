import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../photos/Yogesh Kochar Classes Logo.png';

type SubItem = {
  label: string;
  href: string;
};

type DropdownItem = {
  label: string;
  href: string;
  subItems?: SubItem[];
};

type NavItem = {
  label: string;
  href: string;
  isPage?: boolean;
  dropdown?: DropdownItem[];
};


const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

 const learnWithUsDropdownItems: DropdownItem[] = [
  { 
    label: 'Class IX-X (Foundation Years)', 
    href: '#class-9-10',
    subItems: [
      { label: 'Mathematics', href: '#math-9-10' },
      { label: 'Science', href: '#science-9-10' },
      { label: 'English', href: '#english-9-10' },
      { label: 'Social Science', href: '#social-9-10' }
    ]
  },
  { 
    label: 'Class XI-XII (Career Defining)', 
    href: '#class-11-12',
    subItems: [
      { label: 'Commerce Stream', href: '#commerce' },
      { label: 'Humanities Stream', href: '#humanities' }
    ]
  }
];

const resultsDropdownItems: DropdownItem[] = [
  { 
    label: 'Our Gems', 
    href: '#our-gems',
    subItems: [
      { label: 'Aman Kumar Karn - Delhi Topper 97%', href: '#our-gems' },
      { label: 'Shivam Kumar Goel - Gun Gaurav Sammaan', href: '#our-gems' }
    ]
  },
  { 
    label: 'Our Shining Stars', 
    href: '#results',
    subItems: [
      { label: 'Class of 2024 Results', href: '#results' },
      { label: 'Class of 2025 Results', href: '#results' }
    ]
  }
];

const navItems: NavItem[] = [
  { label: 'Home', href: '/', isPage: true },
  { label: 'About Us', href: '/about', isPage: true },
  { label: 'Learn With Us', href: '#learn', dropdown: learnWithUsDropdownItems },
  { label: 'Results & Achievements', href: '#results', dropdown: resultsDropdownItems },
  { label: 'Google Reviews', href: '#google-reviews' },
  { label: 'Voices of Success', href: '#voices-success' },
  { label: 'Faculty: Our Mentors', href: '/faculty', isPage: true },
  { label: 'Life @ YKC', href: '/life-at-ykc', isPage: true },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' }
];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Yogesh Kochar Classes"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200">
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <div
                            key={dropdownItem.label}
                          >
                            {location.pathname === '/' ? (
                              <a
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                              >
                                {dropdownItem.label}
                              </a>
                            ) : (
                              <Link
                                to={`/${dropdownItem.href}`}
                                className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                              >
                                {dropdownItem.label}
                              </Link>
                            )}
                            {dropdownItem.subItems && (
                              <div className="ml-4 space-y-1">
                                {dropdownItem.subItems.map((subItem) => (
                                  location.pathname === '/' ? (
                                    <a
                                      key={subItem.label}
                                      href={subItem.href}
                                      className="block px-4 py-1 text-xs text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                                    >
                                      • {subItem.label}
                                    </a>
                                  ) : (
                                    <Link
                                      key={subItem.label}
                                      to={`/${subItem.href}`}
                                      className="block px-4 py-1 text-xs text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                                    >
                                      • {subItem.label}
                                    </Link>
                                  )
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  item.isPage ? (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    location.pathname === '/' ? (
                      <a
                        href={item.href}
                        className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={`/${item.href}`}
                        className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    )
                  )
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-slate-700">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.isPage ? (
                    <Link
                      to={item.href}
                      className={`block px-4 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200 ${
                        location.pathname === item.href
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    location.pathname === '/' ? (
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={`/${item.href}`}
                        className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <div key={dropdownItem.label}>
                          {location.pathname === '/' ? (
                            <a
                              href={dropdownItem.href}
                              className="block px-4 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.label}
                            </a>
                          ) : (
                            <Link
                              to={`/${dropdownItem.href}`}
                              className="block px-4 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          )}
                          {dropdownItem.subItems && (
                            <div className="ml-4 space-y-1">
                              {dropdownItem.subItems.map((subItem) => (
                                location.pathname === '/' ? (
                                  <a
                                    key={subItem.label}
                                    href={subItem.href}
                                    className="block px-4 py-1 text-xs text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    • {subItem.label}
                                  </a>
                                ) : (
                                  <Link
                                    key={subItem.label}
                                    to={`/${subItem.href}`}
                                    className="block px-4 py-1 text-xs text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    • {subItem.label}
                                  </Link>
                                )
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;