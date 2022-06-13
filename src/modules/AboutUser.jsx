import UserInfo from "./UserInfo"

const AboutUser = () => {
    return (
        <div className="about-user">
            <div className="container">
                <div className="about-user-item">
                    <img className='about-user-avatar' src="" alt="#" />
                    <div className="about-user-info">
                        <UserInfo 
                            info="Data of Birthday" />
                        <UserInfo
                            info="City" />
                        <UserInfo
                            info="Education" />
                        <UserInfo
                            info="Web Site" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUser;