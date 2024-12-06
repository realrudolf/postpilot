import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import { ImageUploader } from './ImageUploader';
import { PlatformSelector } from './PlatformSelector';
import { CharacterCounter } from './CharacterCounter';
import { HashtagSuggestions } from './HashtagSuggestions';
import { PostPreview } from './PostPreview';
import { PublishSwitch } from './PublishSwitch';
import { Post, SocialPlatform } from '../types';
import { suggestHashtags, extractHashtags } from '../utils/socialMedia';

export function PostEditor() {
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<SocialPlatform[]>([]);
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduledDate, setScheduledDate] = useState<string>('');
  const [suggestedHashtags, setSuggestedHashtags] = useState<string[]>([]);
  const [previewPlatform, setPreviewPlatform] = useState<SocialPlatform>('linkedin');
  const [isDraft, setIsDraft] = useState(false);

  useEffect(() => {
    const existingHashtags = new Set(extractHashtags(content));
    const suggestions = suggestHashtags(content)
      .filter(hashtag => !existingHashtags.has(hashtag));
    setSuggestedHashtags(suggestions);
  }, [content]);

  const handleHashtagClick = (hashtag: string) => {
    setContent(prev => `${prev} ${hashtag}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post = {
      content,
      images,
      platforms: selectedPlatforms,
      scheduledDate: scheduledDate ? new Date(scheduledDate) : undefined,
      isDraft,
    };
    console.log('Submitting post:', post);
  };

  const saveDraft = () => {
    setIsDraft(true);
    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
  };

  const handleScheduleToggle = (scheduled: boolean) => {
    setIsScheduled(scheduled);
    if (!scheduled) {
      setScheduledDate('');
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What would you like to share?"
          className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        
        <div className="mt-2">
          <CharacterCounter content={content} platforms={selectedPlatforms} />
        </div>

        <HashtagSuggestions
          hashtags={suggestedHashtags}
          onHashtagClick={handleHashtagClick}
        />
        
        <div className="mt-4">
          <ImageUploader images={images} onImagesChange={setImages} />
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Share to</h3>
          <PlatformSelector
            selectedPlatforms={selectedPlatforms}
            onPlatformsChange={setSelectedPlatforms}
          />
        </div>

        <div className="mt-6 space-y-4">
          <PublishSwitch isScheduled={isScheduled} onToggle={handleScheduleToggle} />
          
          {isScheduled && (
            <div className="flex items-center gap-4">
              <input
                type="datetime-local"
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                min={new Date().toISOString().slice(0, 16)}
                required={isScheduled}
              />
            </div>
          )}
          
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={saveDraft}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Save size={16} />
              Save Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              disabled={!content || selectedPlatforms.length === 0 || (isScheduled && !scheduledDate)}
            >
              {isScheduled ? 'Schedule Post' : 'Post Now'}
            </button>
          </div>
        </div>
      </form>

      {selectedPlatforms.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex gap-2 mb-4">
            {selectedPlatforms.map(platform => (
              <button
                key={platform}
                onClick={() => setPreviewPlatform(platform)}
                className={`px-4 py-2 rounded-lg ${
                  previewPlatform === platform
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)} Preview
              </button>
            ))}
          </div>
          <PostPreview
            content={content}
            images={images}
            platform={previewPlatform}
          />
        </div>
      )}
    </div>
  );
}