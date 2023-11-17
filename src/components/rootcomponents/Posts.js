import AllHeader from "../lpcomponents/AllHeader";
import { Link } from 'react-router-dom';
import '../../css/rootcomp/Posts.css';

const Posts = () => {
  return (
    <>
      <AllHeader />
      <h1 style={{position:'fixed', top:'0px'}}>Let's Talk</h1>
      <div className="postsDivContainer">
        <section className="postsSection">
          <section>
          <Link to='/signin' style={{textDecoration:'underline'}}>Sign In</Link> to enter
          </section>
          <section>
            confession Forum
          </section>
        </section>
      </div>
    </>
  )
}

export default Posts;