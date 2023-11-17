
const PostAuthor = ({ author }) => {

    return <span>{author
        ? <span>{author}</span>
        : 'Unknown author'}</span>
}

export default PostAuthor