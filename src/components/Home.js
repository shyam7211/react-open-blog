import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs, setBlogs] = useState(null);

    // const handleDelete = (id) => {
    //     let newBlogs = blogs.filter(blogie => blogie.id !== id)
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
      console.log("UseEffect Ran...");
    }, [])
    
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!!" /*handleDelete={handleDelete}*/ />}
            {/* The method below filter's only the required blog example for searching a blog */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Person 2')} title="Person 2's Blogs!!" handleDelete={handleDelete} />  */}
        </div>
    );
}

export default Home;