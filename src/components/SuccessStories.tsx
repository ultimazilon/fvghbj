import React, { useState } from 'react';
import { Star, CheckCircle, DollarSign, Calendar, User, TrendingUp } from 'lucide-react';

const successStories = [
  {
    id: 1,
    name: "Marcus Johnson",
    amount: "$15,750",
    agent: "Agent Mike Rodriguez",
    agentBadge: "MR-2019-001",
    rating: 5,
    recoveryTime: "4 days",
    story: "I received $15,750 in my Cash App account from a business transaction, but the funds were flagged as unverified and got stuck. Cash App support intermediary reached out to me about paying compliance fines. At first, I was thinking this is not real, but I gave it a shot. To my greatest surprise, after completing money laundering verification and other compliance requirements, I got my funds back in my Cash App account with the total balance as they told me. The recovery process amount was high, but Agent Mike guided me through everything professionally.",
    date: "3 days ago",
    verified: true,
    tags: ["Unverified Funds", "Compliance", "Business Transaction"]
  },
  {
    id: 2,
    name: "Sarah Williams",
    amount: "$8,920",
    agent: "Agent Mike Rodriguez",
    agentBadge: "MR-2019-001",
    rating: 5,
    recoveryTime: "2 days",
    story: "My Cash App account was frozen with $8,920 after receiving payment from overseas. Agent Mike explained the verification process clearly and helped me understand each step. The fine payment seemed scary at first, but his track record convinced me. Everything went exactly as promised - funds fully recovered!",
    date: "1 week ago",
    verified: true,
    tags: ["Frozen Account", "International Transfer", "Verification"]
  },
  {
    id: 3,
    name: "David Chen",
    amount: "$22,400",
    agent: "Agent Mike Rodriguez",
    agentBadge: "MR-2019-001",
    rating: 5,
    recoveryTime: "6 days",
    story: "Largest recovery I've seen! My business account had $22,400 stuck due to compliance issues. Agent Mike's expertise in handling large amounts was evident. The process took longer due to the amount, but communication was excellent throughout. Worth every penny of the recovery fee.",
    date: "2 weeks ago",
    verified: true,
    tags: ["Large Amount", "Business Account", "Compliance"]
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    amount: "$5,680",
    agent: "Agent Lisa Thompson",
    agentBadge: "LT-2020-045",
    rating: 4,
    recoveryTime: "5 days",
    story: "Lisa helped me recover funds that were stuck after a failed Bitcoin conversion. The process was smooth, though it took a bit longer than expected. She kept me updated and explained everything clearly. Good experience overall.",
    date: "3 weeks ago",
    verified: true,
    tags: ["Bitcoin", "Conversion Issues", "Delayed Recovery"]
  },
  {
    id: 5,
    name: "Robert Taylor",
    amount: "$12,300",
    agent: "Agent Mike Rodriguez",
    agentBadge: "MR-2019-001",
    rating: 5,
    recoveryTime: "3 days",
    story: "Mike is simply the best! My account was locked with $12,300 after multiple large transactions. He handled the compliance verification professionally and got my funds released quickly. His experience really shows - highly recommended!",
    date: "1 month ago",
    verified: true,
    tags: ["Account Lock", "Multiple Transactions", "Fast Recovery"]
  },
  {
    id: 6,
    name: "Amanda Davis",
    amount: "$7,150",
    agent: "Agent James Wilson",
    agentBadge: "JW-2021-078",
    rating: 4,
    recoveryTime: "7 days",
    story: "James helped with my stuck transfer issue. The process was longer than I hoped, and communication could have been better at times, but he did get my money back eventually. Decent service.",
    date: "1 month ago",
    verified: true,
    tags: ["Transfer Issues", "Slow Process", "Communication"]
  },
  {
    id: 7,
    name: "Michael Brown",
    amount: "$18,900",
    agent: "Agent Mike Rodriguez",
    agentBadge: "MR-2019-001",
    rating: 5,
    recoveryTime: "5 days",
    story: "Outstanding service from Agent Mike! My business received a large payment that got flagged. Mike explained the money laundering compliance requirements clearly and guided me through each step. The recovery fee was substantial, but getting my $18,900 back was worth it. Professional and trustworthy!",
    date: "5 weeks ago",
    verified: true,
    tags: ["Business Payment", "Money Laundering", "Large Recovery"]
  },
  {
    id: 8,
    name: "Lisa Rodriguez",
    amount: "$4,320",
    agent: "Agent Sarah Chen",
    agentBadge: "SC-2020-032",
    rating: 3,
    recoveryTime: "8 days",
    story: "Sarah helped recover my funds, but the process was frustrating. Multiple delays and unclear communication about additional fees. Eventually got my money back, but wouldn't be my first choice again.",
    date: "6 weeks ago",
    verified: true,
    tags: ["Delays", "Communication Issues", "Additional Fees"]
  }
];

export default function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [filterAgent, setFilterAgent] = useState('all');

  const filteredStories = successStories.filter(story => 
    filterAgent === 'all' || story.agent.includes(filterAgent)
  );

  const agents = [...new Set(successStories.map(story => story.agent))];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Recovery Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Read detailed accounts from users who successfully recovered their stuck Cash App funds through our verified intermediary agents
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-semibold text-gray-700">Filter by Agent:</span>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              value={filterAgent}
              onChange={(e) => setFilterAgent(e.target.value)}
            >
              <option value="all">All Agents</option>
              {agents.map(agent => (
                <option key={agent} value={agent.split(' ')[1]}>{agent}</option>
              ))}
            </select>
            <div className="flex items-center space-x-4 ml-auto">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Total Recovered: $2.8M+</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Success Rate: 96.5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredStories.map(story => (
            <div key={story.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Verified Recovery</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{story.amount}</div>
                  <div className="flex items-center space-x-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-700">Recovery Agent:</span>
                  <span className="text-blue-600 font-semibold">{story.agent}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Badge ID:</span>
                  <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{story.agentBadge}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Recovery Time:</span>
                  <span className="font-semibold">{story.recoveryTime}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed">
                  {selectedStory === story.id ? story.story : `${story.story.substring(0, 200)}...`}
                </p>
                <button
                  onClick={() => setSelectedStory(selectedStory === story.id ? null : story.id)}
                  className="text-blue-600 hover:text-blue-800 font-medium mt-2"
                >
                  {selectedStory === story.id ? 'Show Less' : 'Read Full Story'}
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {story.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                <span>{story.date}</span>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Verified Recovery</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
            View All Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}