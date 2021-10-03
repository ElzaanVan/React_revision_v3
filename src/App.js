import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async() => {
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
