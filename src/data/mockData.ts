
import { Movie } from "@/components/ui/MovieCard";

// Hero items
export const heroItems = [
  {
    id: "hero1",
    title: "The Boys",
    description: "The Boys is set in a universe where superpowered individuals known as 'Supes' are recognized as heroes by the general public and work for a powerful corporation known as Vought International that markets and monetizes them.",
    type: "tv" as const,
    backdropPath: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1600&h=900&auto=format&fit=crop&q=80",
    logoPath: "https://m.media-amazon.com/images/G/01/digital/video/AVD-IG/the-boys-s4-logo-transparent.png",
    isPrime: true,
  },
  {
    id: "hero2",
    title: "Fallout",
    description: "Based on one of the greatest video game series of all time, Fallout is the story of haves and have-nots in a world in which there's almost nothing left to have.",
    type: "tv" as const,
    backdropPath: "https://images.unsplash.com/photo-1599639668273-17e77880f3e5?w=1600&h=900&auto=format&fit=crop&q=80",
    logoPath: "https://m.media-amazon.com/images/G/01/digital/video/AVD-IG/fallout-logo-transparent.png",
    isPrime: true,
  },
  {
    id: "hero3",
    title: "Reacher",
    description: "Follow the story of Jack Reacher, a veteran military police investigator who has just recently entered civilian life.",
    type: "tv" as const,
    backdropPath: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&h=900&auto=format&fit=crop&q=80",
    logoPath: "https://m.media-amazon.com/images/G/01/digital/video/AVD-IG/reacher-s2-logo-transparent.png",
    isPrime: true,
  },
];

// Movies data
export const movies: Movie[] = [
  {
    id: "movie1",
    title: "The Tomorrow War",
    posterPath: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&auto=format&fit=crop&q=80",
    type: "movie",
    year: "2021",
    rating: "PG-13",
    isPrime: true,
  },
  {
    id: "movie2",
    title: "The Tender Bar",
    posterPath: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&h=750&auto=format&fit=crop&q=80",
    type: "movie",
    year: "2021",
    rating: "R",
    isPrime: true,
  },
  {
    id: "movie3",
    title: "Being the Ricardos",
    posterPath: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&auto=format&fit=crop&q=80",
    type: "movie",
    year: "2021",
    rating: "R",
    isPrime: true,
  },
  {
    id: "movie4",
    title: "Hotel Transylvania: Transformania",
    posterPath: "https://images.unsplash.com/photo-1628610652772-bb481c8ac4b9?w=500&h=750&auto=format&fit=crop&q=80",
    type: "movie",
    year: "2022",
    rating: "PG",
    isPrime: true,
  },
  {
    id: "movie5",
    title: "The Wheel of Time",
    posterPath: "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?w=500&h=750&auto=format&fit=crop&q=80",
    type: "movie",
    year: "2021",
    rating: "TV-14",
    isPrime: true,
  },
  {
    id: "movie6",
    title: "The Expanse",
    posterPath: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&h=750&auto=format&fit=crop&q=80",
    type: "movie",
    year: "2021",
    rating: "TV-MA",
    isPrime: true,
  },
  {
    id: "movie7",
    title: "A Quiet Place Part II",
    posterPath: "https://images.unsplash.com/photo-1479267658415-ff274a213280?w=500&h=750&auto=format&fit=crop&q=80",
    type: "movie",
    year: "2021",
    rating: "PG-13",
    isPrime: false,
  },
  {
    id: "movie8",
    title: "Without Remorse",
    posterPath: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?w=500&h=750&auto=format&fit=crop&q=80",
    type: "movie",
    year: "2021",
    rating: "R",
    isPrime: true,
  },
];

// TV Shows data
export const tvShows: Movie[] = [
  {
    id: "tv1",
    title: "The Boys",
    posterPath: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2022",
    rating: "TV-MA",
    isPrime: true,
  },
  {
    id: "tv2",
    title: "The Marvelous Mrs. Maisel",
    posterPath: "https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2022",
    rating: "TV-MA",
    isPrime: true,
  },
  {
    id: "tv3",
    title: "Reacher",
    posterPath: "https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2022",
    rating: "TV-MA",
    isPrime: true,
  },
  {
    id: "tv4",
    title: "The Legend of Vox Machina",
    posterPath: "https://images.unsplash.com/photo-1529641484336-ef35148bab06?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2022",
    rating: "TV-MA",
    isPrime: true,
  },
  {
    id: "tv5",
    title: "The Wheel of Time",
    posterPath: "https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2021",
    rating: "TV-14",
    isPrime: true,
  },
  {
    id: "tv6",
    title: "The Expanse",
    posterPath: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2021",
    rating: "TV-MA",
    isPrime: true,
  },
  {
    id: "tv7",
    title: "Invincible",
    posterPath: "https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2021",
    rating: "TV-MA",
    isPrime: true,
  },
  {
    id: "tv8",
    title: "Carnival Row",
    posterPath: "https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2019",
    rating: "TV-MA",
    isPrime: true,
  },
];

// Originals data
export const originals: Movie[] = [
  {
    id: "orig1",
    title: "The Lord of the Rings: The Rings of Power",
    posterPath: "https://images.unsplash.com/photo-1515061093106-e6790ab99756?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2022",
    rating: "TV-14",
    isPrime: true,
  },
  {
    id: "orig2",
    title: "Daisy Jones & The Six",
    posterPath: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2023",
    rating: "TV-MA",
    isPrime: true,
  },
  {
    id: "orig3",
    title: "Fallout",
    posterPath: "https://images.unsplash.com/photo-1599639668273-17e77880f3e5?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2024",
    rating: "TV-MA",
    isPrime: true,
  },
  {
    id: "orig4",
    title: "Citadel",
    posterPath: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2023",
    rating: "TV-MA",
    isPrime: true,
  },
  {
    id: "orig5",
    title: "Hunters",
    posterPath: "https://images.unsplash.com/photo-1557683316-973673baf926?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2023",
    rating: "TV-MA",
    isPrime: true,
  },
  {
    id: "orig6",
    title: "The Terminal List",
    posterPath: "https://images.unsplash.com/photo-1565509982550-64962e64899c?w=500&h=750&auto=format&fit=crop&q=80",
    type: "tv",
    year: "2022",
    rating: "TV-MA",
    isPrime: true,
  },
];

// Genre categories
export const categories = {
  action: [
    ...movies.filter((_, i) => i % 3 === 0),
    ...tvShows.filter((_, i) => i % 3 === 0),
  ],
  drama: [
    ...movies.filter((_, i) => i % 3 === 1),
    ...tvShows.filter((_, i) => i % 3 === 1),
  ],
  comedy: [
    ...movies.filter((_, i) => i % 3 === 2),
    ...tvShows.filter((_, i) => i % 3 === 2),
  ],
  documentary: originals.slice(0, 4),
};

// Get movie or TV show details by ID
export const getContentById = (id: string) => {
  const allContent = [...movies, ...tvShows, ...originals];
  return allContent.find(item => item.id === id);
};

// Movie detail data (for details page)
export interface DetailedContent extends Movie {
  description: string;
  backdropPath: string;
  duration?: string;
  director?: string;
  cast?: string[];
  genres?: string[];
}

export const getDetailedContent = (id: string): DetailedContent | undefined => {
  const content = getContentById(id);
  if (!content) return undefined;
  
  // Mock detailed data
  return {
    ...content,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nisi quis tincidunt ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis nisl.",
    backdropPath: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1600&h=900&auto=format&fit=crop&q=80",
    duration: content.type === "movie" ? "2h 15min" : "45min per episode",
    director: "Jane Smith",
    cast: ["Actor One", "Actor Two", "Actor Three", "Actor Four"],
    genres: ["Action", "Adventure", "Sci-Fi"],
  };
};

// Search function
export const searchContent = (query: string) => {
  const allContent = [...movies, ...tvShows, ...originals];
  if (!query) return allContent;
  
  const lowerCaseQuery = query.toLowerCase();
  return allContent.filter(item => 
    item.title.toLowerCase().includes(lowerCaseQuery)
  );
};
