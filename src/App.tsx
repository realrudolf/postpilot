import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { PostEditor } from './components/PostEditor';
import { Dashboard } from './components/Dashboard';
import { PostQueue } from './components/PostQueue';
import { MediaLibrary } from './components/MediaLibrary';
import { AIContentSuggestions } from './components/AIContentSuggestions';
import { Post } from './types';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleEditPost = (post: Post) => {
    // Implement edit functionality
    console.log('Editing post:', post);
  };

  const handleDeletePost = (postId: string) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const handleApplySuggestion = (content: string) => {
    // Implement suggestion application
    console.log('Applying suggestion:', content);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Dashboard />
        
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <PostEditor />
            <div className="mt-6">
              <PostQueue
                posts={posts}
                onEditPost={handleEditPost}
                onDeletePost={handleDeletePost}
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <AIContentSuggestions onApplySuggestion={handleApplySuggestion} />
            <MediaLibrary />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;