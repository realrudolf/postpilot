import React from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';

interface ContentSuggestion {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'hashtags' | 'caption';
}

interface AIContentSuggestionsProps {
  onApplySuggestion: (content: string) => void;
}

export function AIContentSuggestions({ onApplySuggestion }: AIContentSuggestionsProps) {
  const suggestions: ContentSuggestion[] = [
    {
      id: '1',
      title: 'Professional Introduction',
      content: '🚀 Excited to share our latest innovation in...',
      type: 'text',
    },
    {
      id: '2',
      title: 'Engagement Question',
      content: '💡 What challenges do you face when scaling your business?',
      type: 'text',
    },
    {
      id: '3',
      title: 'Trending Hashtags',
      content: '#BusinessGrowth #Innovation #Leadership #Success',
      type: 'hashtags',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="text-blue-600" size={24} />
        <h2 className="text-lg font-semibold">AI Content Suggestions</h2>
      </div>
      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              {suggestion.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{suggestion.content}</p>
            <button
              onClick={() => onApplySuggestion(suggestion.content)}
              className="flex items-center text-sm text-blue-600 hover:text-blue-700"
            >
              Use this suggestion
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}