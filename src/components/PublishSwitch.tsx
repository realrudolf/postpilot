import React from 'react';
import { Calendar, Send } from 'lucide-react';

interface PublishSwitchProps {
  isScheduled: boolean;
  onToggle: (isScheduled: boolean) => void;
}

export function PublishSwitch({ isScheduled, onToggle }: PublishSwitchProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => onToggle(false)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          !isScheduled
            ? 'bg-blue-100 text-blue-700 border-2 border-blue-700'
            : 'bg-gray-100 text-gray-600 border-2 border-transparent'
        }`}
      >
        <Send size={16} />
        <span>Post Now</span>
      </button>
      <button
        type="button"
        onClick={() => onToggle(true)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          isScheduled
            ? 'bg-blue-100 text-blue-700 border-2 border-blue-700'
            : 'bg-gray-100 text-gray-600 border-2 border-transparent'
        }`}
      >
        <Calendar size={16} />
        <span>Schedule</span>
      </button>
    </div>
  );
}