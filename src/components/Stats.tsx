import React from 'react';
import { TrendingUp, Users, DollarSign, Shield } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: DollarSign,
      value: "$2.8M+",
      label: "Funds Recovered",
      color: "text-green-600"
    },
    {
      icon: Users,
      value: "15,000+",
      label: "Happy Customers",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      value: "96.5%",
      label: "Success Rate",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      value: "50+",
      label: "Verified Agents",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trusted by thousands of users for Cash App fund recovery services
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}