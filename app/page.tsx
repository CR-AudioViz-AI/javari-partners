'use client'

import Link from 'next/link'
import { ArrowRight, DollarSign, Users, TrendingUp, Award, CheckCircle, Zap, Shield, Clock } from 'lucide-react'

export default function HomePage() {
  const benefits = [
    { icon: DollarSign, title: 'Up to 25% Commission', description: 'Earn industry-leading commissions on Year 1 sales' },
    { icon: TrendingUp, title: '3-10% Recurring', description: 'Build passive income with ongoing renewals' },
    { icon: Users, title: 'Lead Support', description: 'Get qualified leads allocated to your pipeline' },
    { icon: Award, title: 'Tier Progression', description: 'Advance from Starter to Elite+ with more benefits' },
    { icon: Zap, title: 'AI-Powered Tools', description: 'Sell cutting-edge AI products that sell themselves' },
    { icon: Shield, title: 'Full Support', description: 'Training, materials, and Javari AI assistance' },
  ]

  const tiers = [
    { name: 'STARTER', leads: '50/month', commission: '15-20%', requirements: 'Application approved' },
    { name: 'PROVEN', leads: '200/month', commission: '18-23%', requirements: '10+ deals closed' },
    { name: 'ELITE', leads: 'Unlimited', commission: '20-25%', requirements: '25+ deals, $100K+ sales' },
    { name: 'ELITE+', leads: 'Unlimited + W-2 Path', commission: '22-25% + Salary', requirements: 'Top performer invitation' },
  ]

  const products = [
    { name: 'Spirits App', tier: 1, commission: '25%', difficulty: 'Easy' },
    { name: 'Realtor AI', tier: 2, commission: '20%', difficulty: 'Medium' },
    { name: 'Market Oracle', tier: 2, commission: '25%', difficulty: 'Medium' },
    { name: 'CRAudioViz Pro', tier: 3, commission: '18%', difficulty: 'Hard' },
    { name: 'Enterprise Solutions', tier: 4, commission: '15%', difficulty: 'Expert' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">CR</span>
              </div>
              <span className="font-semibold text-gray-900">Partner Portal</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 font-medium">
                Sign In
              </Link>
              <Link href="/auth/register" className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Now Accepting Partner Applications
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Help Others Build Wealth.
            <span className="block gradient-text">Earn While You Do.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join the CR AudioViz AI Partner Program and earn up to 25% commission selling 
            the most powerful AI tools for businesses. No upfront costs. Full training and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register" className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-colors">
              Start Your Application
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#products" className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors">
              View Products
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              No upfront costs
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Flexible schedule
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Remote-friendly
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;ve built the partner program that we would want to join ourselves.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm card-hover">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier Progression */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Partner Tier Progression
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start as a Starter partner and work your way up to Elite+ with W-2 opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <div key={index} className={`p-6 rounded-2xl border-2 ${index === 3 ? 'border-amber-400 bg-amber-50' : 'border-gray-200 bg-white'}`}>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                  index === 0 ? 'bg-gray-100 text-gray-800' :
                  index === 1 ? 'bg-blue-100 text-blue-800' :
                  index === 2 ? 'bg-purple-100 text-purple-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  {tier.name}
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-500">Lead Allocation</div>
                    <div className="font-semibold text-gray-900">{tier.leads}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Commission Range</div>
                    <div className="font-semibold text-gray-900">{tier.commission}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Requirements</div>
                    <div className="text-sm text-gray-700">{tier.requirements}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Products You&apos;ll Sell
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose products that match your expertise and target market. Each product is rated for difficulty.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tier</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Commission</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Difficulty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">
                        Tier {product.tier}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-green-600 font-semibold">{product.commission}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-sm ${
                        product.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                        product.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        product.difficulty === 'Hard' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {product.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Non-Negotiable Terms
            </h2>
            <p className="text-lg text-gray-600">
              Transparency is key. Here&apos;s what you need to know upfront.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Clawback Policy</h3>
                  <p className="text-gray-600">90-day 100% clawback, 180-day 50% clawback on cancelled subscriptions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Cross-Sell Ownership</h3>
                  <p className="text-gray-600">Partner opens the door, CR AudioViz AI owns all upsells and cross-sells</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Contact Windows</h3>
                  <p className="text-gray-600">14-day contact window, 30-day close window, or lead returns to pool</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Lead Allocation</h3>
                  <p className="text-gray-600">Based on tier level and performance. Quality over quantity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Apply today and join our growing network of successful partners.
          </p>
          <Link href="/auth/register" className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-colors">
            Apply for Partner Program
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">CR</span>
              </div>
              <span className="font-semibold text-white">CR AudioViz AI</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="https://craudiovizai.com" className="hover:text-white transition-colors">Main Site</a>
              <a href="https://craudiovizai.com/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="https://craudiovizai.com/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="mailto:partners@craudiovizai.com" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            © {new Date().getFullYear()} CR AudioViz AI, LLC. All rights reserved. | Fort Myers, FL
          </div>
        </div>
      </footer>
    </div>
  )
}
