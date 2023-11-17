import MyPostsExcerpt from "./MyPostsExcerpt";
import { useGetPostsQuery } from './postsSlice';

const MyPosts = () => {

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
                ? ids.map(postId => <MyPostsExcerpt key={postId} postId={postId}/>)
                : null
    } else if (isError) {
        content = <p className="postP">{error}</p>;
    }

    return (
        <section className="postSection allPosts">
            {content}
        </section>
    )
}

export default MyPosts