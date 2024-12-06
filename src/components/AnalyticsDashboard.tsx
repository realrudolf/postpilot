import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PostAnalytics } from '../utils/analytics';

interface AnalyticsDashboardProps {
  analytics: PostAnalytics[];
}

export function AnalyticsDashboard({ analytics }: AnalyticsDashboardProps) {
  const chartData = analytics.map(item => ({
    date: new Date(item.date).toLocaleDateString(),
    engagement: item.engagement,
    impressions: item.impressions,
    platform: item.platform,
  }));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Performance Analytics</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="engagement" stroke="#3B82F6" />
            <Line type="monotone" dataKey="impressions" stroke="#10B981" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        {Object.entries(
          analytics.reduce((acc, curr) => ({
            ...acc,
            [curr.platform]: (acc[curr.platform] || 0) + curr.engagement,
          }), {} as Record<string, number>)
        ).map(([platform, engagement]) => (
          <div key={platform} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600">
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </h3>
            <p className="text-2xl font-bold mt-1">{engagement.toLocaleString()}</p>
            <p className="text-sm text-gray-500">Total Engagement</p>
          </div>
        ))}
      </div>
    </div>
  );
}