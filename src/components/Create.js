import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Person 1');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};
        console.log(blog);
    }

    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }}
                >
                </textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}>
                    <option value="Person 1">Person 1</option>
                    <option value="Person 2">Person 2</option>
                </select>
                <button>Create Blog</button>
            </form>
        </div>
    );
}

export default Create;