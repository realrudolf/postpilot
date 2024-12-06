import React from 'react';
import { Hash } from 'lucide-react';

interface HashtagSuggestionsProps {
  hashtags: string[];
  onHashtagClick: (hashtag: string) => void;
}

export function HashtagSuggestions({ hashtags, onHashtagClick }: HashtagSuggestionsProps) {
  if (hashtags.length === 0) return null;

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
        <Hash size={16} />
        <span>Suggested Hashtags</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {hashtags.map((hashtag) => (
          <button
            key={hashtag}
            onClick={() => onHashtagClick(hashtag)}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
          >
            {hashtag}
          </button>
        ))}
      </div>
    </div>
  );
}