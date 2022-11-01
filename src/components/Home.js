import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const[isPending, setIsPending] = useState(true);

    // useEffect(() => {
    //   fetch('http://localhost:3000/blogs')
    //     .then(res => {
    //       return res.json();
    //     })
    //     .then(data => {
    //       setBlogs(data);
    //       setIsPending(false);
    //     })
    // }, [])
    useEffect(() => {
        setTimeout(()=>{
            fetch('http://localhost:3000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
        },1000)
      }, [])
    return (
      <div className="home">
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} />}
      </div>
    );
  }
export default Home;