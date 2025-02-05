export interface Photo {
  id: number;
  url: string;
  category: 'wedding' | 'event' | 'party';
  title: string;
  description: string;
}