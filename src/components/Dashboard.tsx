import React from 'react';
import { BarChart, Users, Clock, ArrowUp } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, change, icon }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          <p className="flex items-center text-sm text-green-600 mt-2">
            <ArrowUp size={16} className="mr-1" />
            {change}
          </p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  );
}

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard
        title="Total Engagement"
        value="12.5K"
        change="+22% from last month"
        icon={<BarChart size={24} className="text-blue-600" />}
      />
      <StatCard
        title="Audience Growth"
        value="2.4K"
        change="+15% from last month"
        icon={<Users size={24} className="text-blue-600" />}
      />
      <StatCard
        title="Scheduled Posts"
        value="18"
        change="6 posts this week"
        icon={<Clock size={24} className="text-blue-600" />}
      />
    </div>
  );
}