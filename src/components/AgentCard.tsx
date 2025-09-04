import React from 'react';
import { Star, MessageCircle, Shield, TrendingUp } from 'lucide-react';

interface AgentCardProps {
  agent: {
    id: number;
    name: string;
    badgeId: string;
    rank: number;
    rating: number;
    reviews: number;
    successRate: number;
    yearsExperience: number;
    specialties: string[];
    avatar: string;
    status: 'online' | 'offline';
    responseTime: string;
    totalRecovered: string;
    casesHandled: number;
  };
  onViewProfile: () => void;
}

export default function AgentCard({ agent, onViewProfile }: AgentCardProps) {
  const getRankColor = (rank: number) => {
    if (rank <= 3) return 'text-yellow-600 bg-yellow-100';
    if (rank <= 10) return 'text-green-600 bg-green-100';
    return 'text-blue-600 bg-blue-100';
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return '🏆';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return '⭐';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {agent.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${agent.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getRankColor(agent.rank)}`}>
                {getRankIcon(agent.rank)} Rank #{agent.rank}
              </span>
              <Shield className="h-4 w-4 text-green-600" />
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="font-bold text-lg">{agent.rating}</span>
          </div>
          <p className="text-sm text-gray-600">{agent.reviews} reviews</p>
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Badge ID:</span>
          <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{agent.badgeId}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Success Rate:</span>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="font-semibold text-green-600">{agent.successRate}%</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Response Time:</span>
          <span className="font-semibold">{agent.responseTime}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Experience:</span>
          <span className="font-semibold">{agent.yearsExperience} years</span>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Specializes in:</h4>
        <div className="flex flex-wrap gap-2">
          {agent.specialties.map((specialty, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {specialty}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex space-x-3">
        <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold">
          Contact Agent
        </button>
        <button 
          onClick={onViewProfile}
          className="bg-blue-100 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors font-semibold"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}