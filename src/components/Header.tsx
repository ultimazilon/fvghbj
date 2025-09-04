import React from 'react';
import { Shield, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CashApp Recovery</h1>
              <p className="text-sm text-gray-600">Verified Agent Directory</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#agents" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Find Agents
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Contact
              </a>
            </nav>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Get Help Now
            </button>
          </div>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}