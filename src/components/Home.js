
import BlogList from "./BlogList";
import Spinner from "./Spinner";
import useFetch from "./useFetch";


const Home = () => {
    const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs'); //data: blogs => pass data from useFetch in name of blogs.

    document.body.style.backgroundColor = '#ffff';
    return (
        <div className="home">
            <div><strong>{error}</strong></div>
            {isPending && <Spinner />}
            {blogs && <BlogList blogs={blogs} title="All Blogs!!" />}
            {/* The method below filter's only the required blog example for searching a blog */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Person 2')} title="Person 2's Blogs!!" handleDelete={handleDelete} />  */}
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'Person 2')} title="Person 2's Blogs!!" handleDelete={handleDelete} />  */}
        </div>
    );
}

export default Home;