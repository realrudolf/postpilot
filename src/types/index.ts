export type SocialPlatform = 'linkedin' | 'twitter' | 'instagram';

export interface Post {
  id: string;
  content: string;
  images: string[];
  platforms: SocialPlatform[];
  scheduledDate?: Date;
  status: 'draft' | 'scheduled' | 'published';
}

export interface ImageUpload {
  url: string;
  file: File;
}