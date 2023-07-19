import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: '1st Blog', author: 'Person 1', body: 'abcdee efroa...', id: 1},
        {title: '2nd Blog', author: 'Person 2', body: 'aro vcnkx efroa...', id: 2},
        {title: '3rd Blog', author: 'Person 3', body: 'fjnjr arroa...', id: 3}
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!!" />
            {/* The method below filter's only the required blog example for searching a blog */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Person 2')} title="Person 2's Blogs!!" />  */}
        </div>
    );
}

export default Home;