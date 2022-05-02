import AboutUser from "../modules/AboutUser";


const Main = () => {
    return (
        <div className='app-wrapper-content'>
            <div className="app-wrapper-item">
                <img className='wrapper-content-banner' alt='#' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbkLH0wNu0EovL5M_IyCuUeVh2Nilhyxj_Q&usqp=CAU' />
                <AboutUser />
            </div>
        </div>
    )
}

export default Main;