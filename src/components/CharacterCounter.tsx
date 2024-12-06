import React from 'react';
import { SocialPlatform } from '../types';
import { PLATFORM_LIMITS } from '../utils/socialMedia';

interface CharacterCounterProps {
  content: string;
  platforms: SocialPlatform[];
}

export function CharacterCounter({ content, platforms }: CharacterCounterProps) {
  const charCount = content.length;

  return (
    <div className="flex gap-4">
      {platforms.map(platform => {
        const limit = PLATFORM_LIMITS[platform];
        const remaining = limit - charCount;
        const isOverLimit = remaining < 0;

        return (
          <div
            key={platform}
            className={`text-sm ${isOverLimit ? 'text-red-500' : 'text-gray-500'}`}
          >
            {platform.charAt(0).toUpperCase() + platform.slice(1)}:{' '}
            {remaining} characters remaining
          </div>
        );
      })}
    </div>
  );
}