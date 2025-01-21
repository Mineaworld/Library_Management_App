interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  description: string;
  coverUrl: string;
  color: string;
  video: string;
  summary: string;
  totalCopies: number;
  availableCopies: number;
  isLoaned?: boolean;
}
