import React from 'react';
import { SocialPlatform } from '../types';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

interface PostPreviewProps {
  content: string;
  images: string[];
  platform: SocialPlatform;
}

export function PostPreview({ content, images, platform }: PostPreviewProps) {
  const PlatformIcon = {
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
  }[platform];

  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex items-center gap-2 mb-4">
        <PlatformIcon size={20} />
        <span className="font-medium">
          {platform.charAt(0).toUpperCase() + platform.slice(1)} Preview
        </span>
      </div>
      
      <div className="prose max-w-none">
        <p className="whitespace-pre-wrap">{content}</p>
      </div>

      {images.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Preview ${index + 1}`}
              className="rounded-lg w-full h-40 object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
}