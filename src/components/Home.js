import { useState } from "react"

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author:'vinay', id: 1},
        { title: 'Welcome', body: 'lorem ipsum...', author:'adarsh', id: 2},
        { title: 'web dev tips', body: 'lorem ipsum...', author:'subu', id: 3},
    ]);


    return(
        <div className="Home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;