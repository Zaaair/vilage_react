import UserInfo from "./UserInfo"

const AboutUser = ()=> {
    return (
        <div className="about-user">
            <div className="container">
                <div className="about-user-item">
                    <img className='about-user-avatar' src='https://www.zegna.com/bin/productImage.UY332.750.144.F.R4.jpeg%201x,%20/bin/productImage.UY332.750.144.F.R2.jpeg%202x' />
                    <div className="about-user-info">
                        <UserInfo style="user-info-small"
                                  info="Data of Birthday"/>
                        <UserInfo style="user-info-small" 
                                  info="City"/>
                        <UserInfo style="user-info-small" 
                                  info="Education"/>
                        <UserInfo style="user-info-small" 
                                  info="Web Site"/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUser;