import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
      fetch('http://localhost:3000/blogs')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setBlogs(data);
        })
    }, [])
  
    return (
      <div className="home">
        {blogs && <BlogList blogs={blogs} />}
      </div>
    );
  }
export default Home;