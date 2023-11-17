import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewPostMutation } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import useAuth from "../../hooks/useAuth";

const AddPostForm = () => {
  const { anonymousname } = useAuth();

    const [addNewPost, { isLoading }] = useAddNewPostMutation()

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const canSave = [ title, content].every(Boolean) && !isLoading;

    const onSavePostClicked = async () => {
        if (canSave) {
            try {
                await addNewPost({ author: anonymousname, title, body: content }).unwrap()
                setTitle('')
                setContent('')
                navigate('/confession-forum/post')
            } catch (err) {
                console.error('Failed to save the post', err)
            }
        }
    }

    return (
        <section className="new">
            <section className="postSection newPostSec">
                <h2 className="postH2">Add a New Post</h2>
                <form className="postForm">
                    <article className="postHeader postAuthor">
                        <PostAuthor author={anonymousname} />
                    </article>
                    <article className="postBody">
                        <label htmlFor="postTitle">Post Title:</label>
                        <input
                            type="text"
                            id="postTitle"
                            className="postInput"
                            name="postTitle"
                            value={title}
                            onChange={onTitleChanged}
                        />
                        <label htmlFor="postContent">Content:</label>
                        <textarea
                            id="postContent"
                            className="postTextarea"
                            name="postContent"
                            value={content}
                            onChange={onContentChanged}
                        />
                        <button
                            type="button"
                            className="postButton"
                            onClick={onSavePostClicked}
                            disabled={!canSave}
                        >Save Post</button>
                    </article>
                </form>
            </section>
        </section>
    )
}
export default AddPostForm