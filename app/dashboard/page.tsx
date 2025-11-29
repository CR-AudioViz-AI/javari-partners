'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle,
} from 'lucide-react'
import { getUser, getPartnerByUserId, getDashboardStats, getLeadsByPartnerId } from '@/lib/supabase'
import { formatCurrency, formatPercent, formatDate, daysUntil, getStatusColor } from '@/lib/utils'
import { Partner, Lead, DashboardStats } from '@/types'

export default function DashboardPage() {
  const [partner, setPartner] = useState<Partner | null>(null)
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [recentLeads, setRecentLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const { user } = await getUser()
        if (user) {
          const { data: partnerData } = await getPartnerByUserId(user.id)
          if (partnerData) {
            setPartner(partnerData)
            
            const dashboardStats = await getDashboardStats(partnerData.id)
            setStats(dashboardStats)
            
            const { data: leads } = await getLeadsByPartnerId(partnerData.id)
            setRecentLeads((leads || []).slice(0, 5))
          }
        }
      } catch (error) {
        console.error('Error loading dashboard:', error)
      } finally {
        setLoading(false)
      }
    }

    loadDashboard()
  }, [])

  const statCards = [
    {
      title: 'Total Leads',
      value: stats?.total_leads || 0,
      change: stats?.leads_this_month || 0,
      changeLabel: 'this month',
      icon: Users,
      color: 'blue',
    },
    {
      title: 'Active Deals',
      value: stats?.active_deals || 0,
      change: stats?.deals_won || 0,
      changeLabel: 'won',
      icon: Target,
      color: 'purple',
    },
    {
      title: 'Total Commissions',
      value: formatCurrency(stats?.total_commissions || 0),
      change: formatCurrency(stats?.pending_commissions || 0),
      changeLabel: 'pending',
      icon: DollarSign,
      color: 'green',
    },
    {
      title: 'Conversion Rate',
      value: formatPercent(stats?.conversion_rate || 0),
      change: formatCurrency(stats?.avg_deal_size || 0),
      changeLabel: 'avg deal',
      icon: TrendingUp,
      color: 'amber',
    },
  ]

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-32 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-20"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!partner) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
          <Clock className="w-8 h-8 text-purple-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Application Pending</h2>
        <p className="text-gray-600 mb-6">
          Your partner application is being reviewed. You&apos;ll have full access once approved.
        </p>
        <Link
          href="/dashboard/apply"
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors"
        >
          Check Application Status
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">Welcome back, {partner.contact_name}!</h2>
            <p className="text-purple-100">
              {partner.tier} Partner • {formatCurrency(partner.total_commissions)} lifetime earnings
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/dashboard/leads"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              View Leads
            </Link>
            <Link
              href="/dashboard/products"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 font-medium">{stat.title}</span>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${stat.color}-100`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-green-600 font-medium">{stat.change}</span>
              <span className="text-gray-500">{stat.changeLabel}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Leads */}
      <div className="bg-white rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Leads</h3>
          <Link href="/dashboard/leads" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
            View all
          </Link>
        </div>
        
        {recentLeads.length === 0 ? (
          <div className="text-center py-8">
            <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No leads assigned yet</p>
            <p className="text-sm text-gray-400 mt-1">
              New leads will appear here once allocated to your account
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">
                      {lead.company_name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{lead.company_name}</div>
                    <div className="text-sm text-gray-500">{lead.contact_name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                  <div className="text-sm text-gray-500 mt-1">
                    {daysUntil(lead.contact_deadline) > 0 
                      ? `${daysUntil(lead.contact_deadline)} days left`
                      : 'Overdue'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/dashboard/products" className="bg-white rounded-2xl p-6 card-hover group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Browse Products</h4>
              <p className="text-sm text-gray-500">View available products to sell</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto" />
          </div>
        </Link>

        <Link href="/dashboard/documents" className="bg-white rounded-2xl p-6 card-hover group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Sales Materials</h4>
              <p className="text-sm text-gray-500">Download pitch decks & docs</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto" />
          </div>
        </Link>

        <Link href="/dashboard/settings" className="bg-white rounded-2xl p-6 card-hover group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
              <DollarSign className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Payment Settings</h4>
              <p className="text-sm text-gray-500">Manage payout preferences</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto" />
          </div>
        </Link>
      </div>
    </div>
  )
}
