import React from 'react';
import { Shield, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CashApp Recovery</h3>
                <p className="text-gray-300 text-sm">Verified Agent Directory</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting users with verified, top-rated recovery agents specializing in Cash App fund recovery services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500" />
                <span>support@cashapprecovery.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500" />
                <span>1-800-RECOVERY</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-500" />
                <span>24/7 Live Support</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">Pending Transfers</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Failed Transactions</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Account Recovery</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Disputed Charges</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Bitcoin Recovery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Agent Verification</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 CashApp Recovery. All rights reserved. | Verified agents are independent contractors.</p>
        </div>
      </div>
    </footer>
  );
}