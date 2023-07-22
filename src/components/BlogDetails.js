import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Spinner from "./Spinner";

const BlogDetails = () => {
    const { id } = useParams();
    const { data : blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+ blog.id,{
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }
    return (
        <div className="blog-details">
            {/* { isPending && <div>Loading...</div> } */}
            { isPending && <Spinner /> }
            { error && <dir>{error}</dir> }
            { blog && <article>
                <h2>{blog.title}</h2>
                <div>{blog.body}</div>
                <p>Written by <strong>~<i>{blog.author}</i></strong></p>
                <button onClick={handleDelete}>Delete Blog</button>
            </article> }
        </div>
    );
}

export default BlogDetails;