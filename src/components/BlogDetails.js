import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Spinner from "./Spinner";

const BlogDetails = () => {
    const { id } = useParams();
    const { data : blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    return (
        <div className="blog-details">
            {/* { isPending && <div>Loading...</div> } */}
            { isPending && <Spinner /> }
            { error && <dir>{error}</dir> }
            { blog && <article>
                <h2>{blog.title}</h2>
                <div>{blog.body}</div>
                <p>Written by <strong>~<i>{blog.author}</i></strong></p>
            </article> }
        </div>
    );
}

export default BlogDetails;