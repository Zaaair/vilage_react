

const Post = (props) => {
let widths = props.message.length * 15;

//    let spanStyle = {
//     maxWidth: {widths} + 'px',
//    }
    return (
        
        <span className="post"   style={{maxWidth: widths}}>{props.message}</span>
    )
}
export default Post;