const API_KEY = "ec4474524aff712b113d2566598ff981";
const API_BASE = "https://api.themoviedb.org/3";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzQ0NzQ1MjRhZmY3MTJiMTEzZDI1NjY1OThmZjk4MSIsIm5iZiI6MTczOTkyMTQ1Mi4zODEsInN1YiI6IjY3YjUxODJjYjY4N2U3MzhmMTU2NjNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Lq9g9Y4Z-zi5FgttUZHzOqZtOoB8XtE8L9qXjLH34E";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`).then((res) => res.json());
  return req;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        itens: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ), //Filtra filmes da netflix
      },
      {
        slug: "trending",
        title: "Recomendados para voce",
        itens: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em alta",
        itens: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        itens: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        itens: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        itens: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        itens: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "Documentary",
        title: "Documentario",
        itens: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getInfoFeature: async (id, type) => {
    let info = {};

    if (id) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${id}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${id}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
