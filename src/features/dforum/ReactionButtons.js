import { useAddReactionMutation } from './postsSlice'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    smile: '😄',
    heart: '❤️',
    hug: '👬'
}

const ReactionButtons = ({ post }) => {
    const [addReaction] = useAddReactionMutation()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => {
                    const newValue = post.reactions[name] + 1;
                    addReaction({ id: post._id, reactions: { ...post.reactions, [name]: newValue } })
                }}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div className='reactionButtons'>{reactionButtons}</div>
}
export default ReactionButtons