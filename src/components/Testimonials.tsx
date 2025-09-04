import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    amount: "$2,450",
    agent: "Michael Rodriguez",
    rating: 5,
    text: "Michael helped me recover my stuck transfer within 48 hours. Professional, knowledgeable, and kept me updated throughout the process. Highly recommended!",
    date: "2 days ago",
    verified: true
  },
  {
    id: 2,
    name: "Jessica Martinez",
    amount: "$890",
    agent: "Sarah Chen",
    rating: 5,
    text: "Sarah was amazing! My Cash App account was frozen and she guided me through the entire recovery process. Got my money back in just 3 days.",
    date: "1 week ago",
    verified: true
  },
  {
    id: 3,
    name: "Robert Johnson",
    amount: "$5,200",
    agent: "David Thompson",
    rating: 5,
    text: "Lost a large Bitcoin transaction through Cash App. David's expertise was invaluable - he recovered the full amount. Worth every penny!",
    date: "2 weeks ago",
    verified: true
  },
  {
    id: 4,
    name: "Emily Davis",
    amount: "$675",
    agent: "Lisa Johnson",
    rating: 4,
    text: "Lisa helped resolve my disputed charge issue quickly. Very responsive and explained everything clearly. Great service!",
    date: "3 weeks ago",
    verified: true
  },
  {
    id: 5,
    name: "Carlos Rodriguez",
    amount: "$1,320",
    agent: "James Wilson",
    rating: 5,
    text: "Account verification nightmare turned into success story thanks to James. He knew exactly what to do and got my account back online.",
    date: "1 month ago",
    verified: true
  },
  {
    id: 6,
    name: "Amanda White",
    amount: "$430",
    agent: "Maria Garcia",
    rating: 4,
    text: "Maria helped with my international transfer issue. It took a bit longer than expected but she got it resolved. Good communication throughout.",
    date: "1 month ago",
    verified: true
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real reviews from users who successfully recovered their Cash App funds with our verified agents
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">Recovered: <span className="font-semibold text-green-600">{testimonial.amount}</span></p>
                  <p className="text-sm text-gray-600">Agent: <span className="font-semibold">{testimonial.agent}</span></p>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
              
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{testimonial.date}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  Verified Recovery
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
            View More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}