import { Movie } from '../types';

export const movies: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
    genre: "Sci-Fi",
    year: 2016
  },
  {
    id: 2,
    title: "The Crown",
    description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
    genre: "Drama",
    year: 2016
  },
  {
    id: 3,
    title: "Breaking Bad",
    description: "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's financial future.",
    imageUrl: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop",
    genre: "Crime",
    year: 2008
  },
  {
    id: 4,
    title: "The Witcher",
    description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    imageUrl: "https://images.unsplash.com/photo-1599719500956-d158a26ab3ee?w=800&auto=format&fit=crop",
    genre: "Fantasy",
    year: 2019
  }
];