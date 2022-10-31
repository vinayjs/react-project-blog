import { useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author:'vinay', id: 1},
        { title: 'Welcome', body: 'lorem ipsum...', author:'adarsh', id: 2},
        { title: 'web dev tips', body: 'lorem ipsum...', author:'subu', id: 3},
    ]);


    return(
        <div className="Home">
            <BlogList blogs= {blogs} title="All Blogs"/>
        </div>
    )
}

export default Home;