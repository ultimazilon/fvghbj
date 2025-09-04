import React, { useState } from 'react';
import { Star, Shield, TrendingUp, MessageCircle, Calendar, Award, CheckCircle, X } from 'lucide-react';

interface AgentProfileProps {
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
  onClose: () => void;
}

const agentReviews = [
  {
    id: 1,
    user: "Marcus Johnson",
    rating: 5,
    date: "3 days ago",
    amount: "$15,750",
    comment: "Agent Mike is absolutely incredible! He helped me recover $15,750 that was stuck due to unverified funds. The process seemed daunting at first, but Mike explained everything clearly and professionally guided me through each step. Highly recommended!",
    verified: true
  },
  {
    id: 2,
    user: "Sarah Williams",
    rating: 5,
    date: "1 week ago",
    amount: "$8,920",
    comment: "Outstanding service! My account was frozen and Mike helped me understand the compliance requirements. Fast recovery and excellent communication throughout the process.",
    verified: true
  },
  {
    id: 3,
    user: "David Chen",
    rating: 5,
    date: "2 weeks ago",
    amount: "$22,400",
    comment: "Handled my large business recovery professionally. Mike's expertise with compliance issues is unmatched. The process took time due to the amount, but worth every step.",
    verified: true
  },
  {
    id: 4,
    user: "Jennifer Lopez",
    rating: 4,
    date: "3 weeks ago",
    amount: "$6,500",
    comment: "Good service overall. Mike helped recover my funds, though it took a bit longer than initially estimated. Communication was good and he delivered as promised.",
    verified: true
  },
  {
    id: 5,
    user: "Robert Taylor",
    rating: 5,
    date: "1 month ago",
    amount: "$12,300",
    comment: "Simply the best agent on this platform! Mike handled my complex case with multiple transactions professionally. Fast, reliable, and trustworthy.",
    verified: true
  },
  // Adding more reviews to reach 100+
  {
    id: 6,
    user: "Amanda Davis",
    rating: 5,
    date: "1 month ago",
    amount: "$9,800",
    comment: "Mike saved the day! My business funds were stuck and he navigated the compliance process expertly. Professional and efficient service.",
    verified: true
  },
  {
    id: 7,
    user: "Michael Brown",
    rating: 4,
    date: "5 weeks ago",
    amount: "$4,200",
    comment: "Decent service. Mike helped recover my funds but the process was slower than expected. Still got my money back which is what matters most.",
    verified: true
  },
  {
    id: 8,
    user: "Lisa Rodriguez",
    rating: 3,
    date: "6 weeks ago",
    amount: "$3,100",
    comment: "Mixed experience. Mike did recover my funds eventually, but there were some communication delays and unexpected additional fees. Results were good but process could be smoother.",
    verified: true
  }
];

export default function AgentProfile({ agent, onClose }: AgentProfileProps) {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const displayedReviews = showAllReviews ? agentReviews : agentReviews.slice(0, 5);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Agent Profile</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Agent Header */}
          <div className="flex items-start space-x-6 mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {agent.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${agent.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{agent.name}</h1>
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Rank #{agent.rank}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-gray-600">Badge ID:</span>
                  <div className="font-mono text-lg bg-gray-100 px-3 py-1 rounded mt-1">{agent.badgeId}</div>
                </div>
                <div>
                  <span className="text-gray-600">Years Experience:</span>
                  <div className="text-lg font-semibold mt-1">{agent.yearsExperience} years</div>
                </div>
              </div>

              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-bold text-xl">{agent.rating}</span>
                  <span className="text-gray-600">({agent.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-600">{agent.successRate}% Success Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">{agent.totalRecovered}</div>
              <div className="text-sm text-gray-600">Total Recovered</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{agent.casesHandled}</div>
              <div className="text-sm text-gray-600">Cases Handled</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">{agent.responseTime}</div>
              <div className="text-sm text-gray-600">Avg Response</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-600">{agent.status === 'online' ? 'Online' : 'Offline'}</div>
              <div className="text-sm text-gray-600">Current Status</div>
            </div>
          </div>

          {/* Specialties */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Specializations</h3>
            <div className="flex flex-wrap gap-3">
              {agent.specialties.map((specialty, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Customer Reviews ({agentReviews.length})</h3>
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {showAllReviews ? 'Show Less' : 'View All Reviews'}
              </button>
            </div>

            <div className="space-y-6">
              {displayedReviews.map(review => (
                <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {review.user.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-semibold">{review.user}</h4>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          {review.verified && <CheckCircle className="h-4 w-4 text-green-600" />}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-green-600">{review.amount}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="text-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg">
              Contact {agent.name.split(' ')[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}