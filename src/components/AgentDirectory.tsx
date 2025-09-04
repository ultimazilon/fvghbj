import React, { useState } from 'react';
import { Search, Filter, SortDesc } from 'lucide-react';
import AgentCard from './AgentCard';
import AgentProfile from './AgentProfile';

const agents = [
  {
    id: 1,
    name: "Michael Rodriguez",
    badgeId: "MR-2019-001",
    rank: 1,
    rating: 4.9,
    reviews: 847,
    successRate: 98,
    yearsExperience: 6,
    specialties: ["Pending Transfers", "Failed Transactions", "Account Recovery"],
    avatar: "/api/placeholder/64/64",
    status: "online" as const,
    responseTime: "< 5 min",
    totalRecovered: "$890K",
    casesHandled: 1247
  },
  {
    id: 2,
    name: "Sarah Chen",
    badgeId: "SC-2020-032",
    rank: 2,
    rating: 4.8,
    reviews: 623,
    successRate: 96,
    yearsExperience: 4,
    specialties: ["Disputed Charges", "Frozen Accounts", "Card Issues"],
    avatar: "/api/placeholder/64/64",
    status: "online" as const,
    responseTime: "< 10 min",
    totalRecovered: "$650K",
    casesHandled: 892
  },
  {
    id: 3,
    name: "David Thompson",
    badgeId: "DT-2019-067",
    rank: 3,
    rating: 4.7,
    reviews: 512,
    successRate: 94,
    yearsExperience: 5,
    specialties: ["Bitcoin Recovery", "Large Amounts", "Business Accounts"],
    avatar: "/api/placeholder/64/64",
    status: "offline" as const,
    responseTime: "< 15 min",
    totalRecovered: "$720K",
    casesHandled: 678
  },
  {
    id: 4,
    name: "Lisa Johnson",
    badgeId: "LJ-2021-089",
    rank: 4,
    rating: 4.8,
    reviews: 439,
    successRate: 95,
    yearsExperience: 3,
    specialties: ["Payment Issues", "Refund Problems", "Security Help"],
    avatar: "/api/placeholder/64/64",
    status: "online" as const,
    responseTime: "< 8 min",
    totalRecovered: "$420K",
    casesHandled: 567
  },
  {
    id: 5,
    name: "James Wilson",
    badgeId: "JW-2021-078",
    rank: 5,
    rating: 4.6,
    reviews: 367,
    successRate: 93,
    yearsExperience: 3,
    specialties: ["Account Verification", "Identity Issues", "Support Escalation"],
    avatar: "/api/placeholder/64/64",
    status: "online" as const,
    responseTime: "< 12 min",
    totalRecovered: "$380K",
    casesHandled: 445
  },
  {
    id: 6,
    name: "Maria Garcia",
    badgeId: "MG-2020-156",
    rank: 6,
    rating: 4.7,
    reviews: 298,
    successRate: 92,
    yearsExperience: 4,
    specialties: ["Transfer Delays", "International Issues", "Mobile Problems"],
    avatar: "/api/placeholder/64/64",
    status: "offline" as const,
    responseTime: "< 20 min",
    totalRecovered: "$290K",
    casesHandled: 334
  }
];

export default function AgentDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rank');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null);

  const filteredAgents = agents
    .filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           agent.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesStatus = filterStatus === 'all' || agent.status === filterStatus;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rank':
          return a.rank - b.rank;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

  return (
    <section id="agents" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Verified Recovery Agents</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our directory of verified Cash App recovery specialists, ranked by success rate and customer satisfaction
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search agents or specialties..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="rank">Sort by Rank</option>
                <option value="rating">Sort by Rating</option>
                <option value="reviews">Sort by Reviews</option>
              </select>
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Agents</option>
                <option value="online">Online Only</option>
                <option value="offline">Include Offline</option>
              </select>
            </div>
          </div>
        </div>

        {/* Agent Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgents.map(agent => (
            <AgentCard 
              key={agent.id} 
              agent={agent} 
              onViewProfile={() => setSelectedAgent(agent)}
            />
          ))}
        </div>

        {/* Agent Profile Modal */}
        {selectedAgent && (
          <AgentProfile 
            agent={selectedAgent} 
            onClose={() => setSelectedAgent(null)} 
          />
        )}
      </div>
    </section>
  );
}