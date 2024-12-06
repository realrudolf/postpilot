import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { SocialPlatform } from '../types';

interface PlatformSelectorProps {
  selectedPlatforms: SocialPlatform[];
  onPlatformsChange: (platforms: SocialPlatform[]) => void;
}

export function PlatformSelector({ selectedPlatforms, onPlatformsChange }: PlatformSelectorProps) {
  const togglePlatform = (platform: SocialPlatform) => {
    if (selectedPlatforms.includes(platform)) {
      onPlatformsChange(selectedPlatforms.filter(p => p !== platform));
    } else {
      onPlatformsChange([...selectedPlatforms, platform]);
    }
  };

  const platforms = [
    {
      id: 'linkedin' as SocialPlatform,
      name: 'LinkedIn',
      icon: Linkedin,
      activeColor: 'bg-[#0077B5]',
      hoverColor: 'hover:border-[#0077B5] hover:text-[#0077B5]'
    },
    {
      id: 'twitter' as SocialPlatform,
      name: 'Twitter',
      icon: Twitter,
      activeColor: 'bg-[#1DA1F2]',
      hoverColor: 'hover:border-[#1DA1F2] hover:text-[#1DA1F2]'
    },
    {
      id: 'instagram' as SocialPlatform,
      name: 'Instagram',
      icon: Instagram,
      activeColor: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
      hoverColor: 'hover:border-[#E1306C] hover:text-[#E1306C]'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {platforms.map(({ id, name, icon: Icon, activeColor, hoverColor }) => {
        const isSelected = selectedPlatforms.includes(id);
        return (
          <button
            key={id}
            onClick={() => togglePlatform(id)}
            className={`
              relative group flex flex-col items-center justify-center p-6
              rounded-xl border-2 transition-all duration-300
              ${isSelected 
                ? `${activeColor} border-transparent text-white` 
                : 'bg-white border-gray-200 text-gray-600 ' + hoverColor}
            `}
          >
            <Icon size={24} className={`mb-2 transition-transform group-hover:scale-110`} />
            <span className="text-sm font-medium">{name}</span>
            {isSelected && (
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white animate-pulse" />
            )}
          </button>
        );
      })}
    </div>
  );
}