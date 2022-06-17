import Post from "./Post";



const MyPosts = () => {
    return (
<div className="my-posts">
    <h2> My Posts </h2>
    <div>
        <textarea></textarea>
    </div>
    <div>
        <button>Add Post</button>
    </div>
    <div className="posts">
        <Post message = 'Hello' />
        <Post message = 'Yo' />
        <Post message = 'Kyky' />
    </div>
</div>

    )
}

export default MyPosts;