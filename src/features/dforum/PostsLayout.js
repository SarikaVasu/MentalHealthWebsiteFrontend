import { Outlet } from 'react-router-dom';
import PostsHeader from './postscomponents/PostsHeader';
import PostsFooter from './postscomponents/PostsFooter';

const PostsLayout = () => {
    return (
        <>
            <PostsHeader />
            <main className="PostsLayout-body">
                <Outlet />
            </main>
            <PostsFooter />
        </>
    )
}

export default PostsLayout;