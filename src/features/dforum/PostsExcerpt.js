import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';
import { useGetPostsQuery } from './postsSlice';
import useAuth from  "../../hooks/useAuth";

const PostsExcerpt = ({ postId }) => {
    const { anonymousname } = useAuth();

    const { post } = useGetPostsQuery('getPosts', {
        selectFromResult: ({ data }) => ({
            post: data?.entities[postId]
        }),
    })

    let editLink
    if(post.author === anonymousname) {
        editLink = <Link className="editLink" to={`/confession-forum/post/edit/${post._id}`}>Edit Post</Link>
    } else {
        editLink = null;
    }

    return (
        <article className="eachPost postArticle">
            <article className="postHeader postArticle">
                <PostAuthor author={post.author} />
                <p className="postP">
                    {editLink}
                </p>
            </article>
            <article className="postArticle">
                <h2 className="postH2">{post.title}</h2>
                <p className="excerpt postP">{post.body.substring(0, 70)}...</p>
                <p className="postCredit postP">
                    <Link to={`/confession-forum/post/${post._id}`}>View Post</Link>
                    <TimeAgo timestamp={post.date} />
                </p>
            </article>
            <ReactionButtons post={post} />
        </article>
    )
}

export default PostsExcerpt