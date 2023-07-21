import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // const handleDelete = (id) => {
    //     let newBlogs = blogs.filter(blogie => blogie.id !== id)
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok){
                        throw Error('Something went wrong...');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setBlogs(null)
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000)
        console.log("UseEffect Ran...");
    }, [])

    return (
        <div className="home">
            <div><strong>{error}</strong></div>
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!!" /*handleDelete={handleDelete}*/ />}
            {/* The method below filter's only the required blog example for searching a blog */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Person 2')} title="Person 2's Blogs!!" handleDelete={handleDelete} />  */}
        </div>
    );
}

export default Home;