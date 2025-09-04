import React from 'react';
import { Shield, CheckCircle, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Recover Your <span className="text-green-600">Cash App Funds</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with verified, top-rated recovery agents who specialize in helping users retrieve stuck funds from Cash App transactions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#agents" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
              Find Verified Agents
            </a>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Agents Only</h3>
              <p className="text-gray-600">All agents are thoroughly vetted and verified for authenticity</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real Reviews</h3>
              <p className="text-gray-600">Browse authentic reviews from users who recovered their funds</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Success</h3>
              <p className="text-gray-600">Track record of successful fund recoveries from Cash App</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}