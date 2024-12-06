import React from 'react';
import { Clock, Edit2, Trash2 } from 'lucide-react';
import { Post } from '../types';

interface PostQueueProps {
  posts: Post[];
  onEditPost: (post: Post) => void;
  onDeletePost: (postId: string) => void;
}

export function PostQueue({ posts, onEditPost, onDeletePost }: PostQueueProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Scheduled Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {post.images[0] && (
                  <img
                    src={post.images[0]}
                    alt=""
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                )}
              </div>
              <div>
                <p className="text-sm text-gray-900 line-clamp-2">{post.content}</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Clock size={14} className="mr-1" />
                  {new Date(post.scheduledDate!).toLocaleString()}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onEditPost(post)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Edit2 size={18} />
              </button>
              <button
                onClick={() => onDeletePost(post.id)}
                className="p-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}