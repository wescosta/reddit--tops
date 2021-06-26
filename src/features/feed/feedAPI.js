import posts from '../../data/top-posts.json';

// A mock function to mimic making an async request for data
export function fetchFeed({ count = 0, limit = 10 }) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ 
      data: posts.data.children.slice(count, count + limit)
    }), 500)
  );
}
