import { Link } from "react-router-dom";
import '../../../css/dforum/PostsHeader.css';
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { anonymousname } = useAuth();

    const navigate = useNavigate();

    const MyPostsClicked = () => {
        navigate(`/confession-forum/post/my-posts/${anonymousname}`);
    }

    return (
        <header className="postsHeader">
            <nav className="postsHeaderNav">
                <h1>Confession Forum</h1>
                <ul className="postsNavLinks">
                    <li>
                        <button className="postNavButton">
                            <Link to="/confession-forum/post" className="postsNavLink">Posts</Link>
                        </button>
                    </li>
                    <li>
                        <button className="postNavButton">
                            <Link to="/confession-forum/post/new" className="postsNavLink">Add a Post</Link>
                        </button>
                    </li>
                    <li>
                        <button onClick={MyPostsClicked} className="postsNavLink postNavButton">My Posts</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header