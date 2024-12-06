import React, { useState } from 'react';
import { Image, Folder, Search } from 'lucide-react';

interface MediaItem {
  id: string;
  url: string;
  name: string;
  type: 'image' | 'video';
  date: string;
}

export function MediaLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('all');

  const folders = [
    { id: 'all', name: 'All Media' },
    { id: 'products', name: 'Products' },
    { id: 'events', name: 'Events' },
    { id: 'team', name: 'Team' },
  ];

  const mediaItems: MediaItem[] = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
      name: 'Team Meeting',
      type: 'image',
      date: '2024-03-15',
    },
    // Add more items as needed
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Media Library</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search media..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-48">
          {folders.map((folder) => (
            <button
              key={folder.id}
              onClick={() => setSelectedFolder(folder.id)}
              className={`flex items-center w-full px-4 py-2 rounded-lg mb-2 ${
                selectedFolder === folder.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-50'
              }`}
            >
              <Folder size={18} className="mr-2" />
              {folder.name}
            </button>
          ))}
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-4 gap-4">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-lg overflow-hidden border hover:border-blue-500 transition-colors"
              >
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="px-4 py-2 bg-white rounded-lg text-sm font-medium">
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}