import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetPostsQuery } from './postsSlice';
import { useUpdatePostMutation, useDeletePostMutation } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import useAuth from '../../hooks/useAuth';

const EditPostForm = () => {
    const { anonymousname } = useAuth();

    const { id } = useParams()
    const navigate = useNavigate()

    const [updatePost, { isLoading }] = useUpdatePostMutation()
    const [deletePost] = useDeletePostMutation()

    const { post, isLoading: isLoadingPosts, isSuccess } = useGetPostsQuery('getPosts', {
        selectFromResult: ({ data, isLoading, isSuccess }) => ({
            post: data?.entities[id],
            isLoading,
            isSuccess
        }),
    })

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        if (isSuccess) {
            setTitle(post.title)
            setContent(post.body)
        }
    }, [isSuccess, post?.title, post?.body])

    if (isLoadingPosts) return <p>Loading...</p>

    if (!post) {
        return (
            <section className='postSection'>
                <h2 className='postH2'>Post not found!</h2>
            </section>
        )
    }

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const canSave = [title, content].every(Boolean) && !isLoading;

    const onSavePostClicked = async () => {
        if (canSave) {
            try {
                await updatePost({ id: post?.id, author: anonymousname, title, body: content }).unwrap()
                setTitle('')
                setContent('')
                navigate(`/confession-forum/post/${id}`)
            } catch (err) {
                console.error('Failed to save the post', err)
            }
        }
    }

    const onDeletePostClicked = async () => {
        try {
            await deletePost({ id: post?.id }).unwrap()
            setTitle('')
            setContent('')
            navigate('/confession-forum/post')
        } catch (err) {
            console.error('Failed to delete the post', err)
        }
    }

    return (
        <section className="edit">
            <section className='postSection editPostSec'>
                <h2 className='postH2'>Edit Post</h2>
                <form className='editForm'>
                    <article className="postHeader editAuthor">
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
                            className='postButton'
                            onClick={onSavePostClicked}
                            disabled={!canSave}
                        >
                            Save Post
                        </button>
                        <button className="deleteButton postButton"
                            type="button"
                            onClick={onDeletePostClicked}
                        >
                            Delete Post
                        </button>
                    </article>
                </form>
            </section>
        </section>
    )
}

export default EditPostForm