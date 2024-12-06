export const PLATFORM_LIMITS = {
  twitter: 280,
  linkedin: 3000,
  instagram: 2200,
};

export function countCharacters(text: string): number {
  return text.length;
}

export function extractHashtags(text: string): string[] {
  const hashtagRegex = /#[a-zA-Z0-9_]+/g;
  return text.match(hashtagRegex) || [];
}

export function suggestHashtags(text: string): string[] {
  const words = text.toLowerCase().split(/\s+/);
  const commonBusinessHashtags = [
    '#business',
    '#entrepreneurship',
    '#marketing',
    '#leadership',
    '#innovation',
    '#success',
    '#startup',
    '#networking',
  ];
  
  return commonBusinessHashtags.filter(hashtag => 
    words.some(word => hashtag.toLowerCase().includes(word.replace('#', '')))
  );
}