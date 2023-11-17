import PostsExcerpt from "./PostsExcerpt";
import { useGetPostsQuery } from './postsSlice';

const PostsList = () => {
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery('getPosts')

    let content;
    if (isLoading) {
        content = <p className="postP">"Loading..."</p>;
    } else if (isSuccess) {  
        const { ids } = posts;  
        content = ids?.length
                ? ids.map(postId => <PostsExcerpt key={postId} postId={postId} />)
                : null
        // posts.ids.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (isError) {
        content = <p className="postP">{error}</p>;
    }

    return (
        <section className="postSection allPosts">
            {content}
        </section>
    )
}
export default PostsList