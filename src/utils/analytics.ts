import { SocialPlatform } from '../types';

export interface PostAnalytics {
  impressions: number;
  engagement: number;
  clicks: number;
  shares: number;
  platform: SocialPlatform;
  date: Date;
}

export interface AnalyticsSummary {
  totalEngagement: number;
  engagementRate: number;
  topPerformingPlatform: SocialPlatform;
  growth: number;
}

export function calculateEngagementRate(impressions: number, engagements: number): number {
  return (engagements / impressions) * 100;
}

export function getTopPerformingPlatform(analytics: PostAnalytics[]): SocialPlatform {
  const platformStats = analytics.reduce((acc, curr) => {
    acc[curr.platform] = (acc[curr.platform] || 0) + curr.engagement;
    return acc;
  }, {} as Record<SocialPlatform, number>);

  return Object.entries(platformStats).reduce((a, b) => 
    platformStats[a as SocialPlatform] > platformStats[b[0] as SocialPlatform] ? a : b[0]
  ) as SocialPlatform;
}