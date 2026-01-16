export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  videoUrl: string; // GitHub raw video URL
  githubUrl: string;
  liveUrl?: string;
  category: 'ALL' | 'FULLSTACK' | 'FRONTEND' | 'BACKEND' | 'MOBILE';
}
