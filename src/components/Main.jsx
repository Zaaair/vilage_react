import AboutUser from "../modules/AboutUser";
import MyPosts from "../modules/MyPosts";


const Main = () => {
    return (
        <div className='main'>
            <div className="main-item">
                <div className='banner'/>
                <AboutUser />
                <MyPosts />
            </div>
        </div>
    )
}

export default Main;