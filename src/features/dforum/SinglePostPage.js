import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetPostsQuery } from "./postsSlice";
import useAuth from  "../../hooks/useAuth";

const SinglePostPage = () => {
    const { anonymousname } = useAuth();

    const { id } = useParams()

    const { post, isLoading } = useGetPostsQuery('getPosts', {
        selectFromResult: ({ data, isLoading }) => ({
            post: data?.entities[id],
            isLoading
        }),
    })

    if (isLoading) return <p className="postP">Loading...</p>

    if (!post) {
        return (
            <section className="postSection">
                <h2>Post not found!</h2>
            </section>
        )
    }

    let editLink
    if(post.author === anonymousname) {
        editLink = <Link className="editLink" to={`/confession-forum/post/edit/${post._id}`}>Edit Post</Link>
    } else {
        editLink = null;
    }

    return (
        <section className="singlePostSec">
            <article className="singlePost postArticle">
                <article className="postHeader postArticle">
                    <PostAuthor author={post.author} />
                    <p className="postP">
                        {editLink}
                    </p>
                </article>
                <article className="postArticle">
                    <h2 className="postH2">{post.title}</h2>
                    <p className="postP">{post.body}</p>
                    <p className="singlepostCredit postP">
                        <TimeAgo timestamp={post.date} />
                    </p>
                </article>
                <ReactionButtons post={post} />
            </article>
        </section>
    )
}

export default SinglePostPage