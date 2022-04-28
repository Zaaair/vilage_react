import './scss/style.scss';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='app-wrapper-header'>
        <img alt='#' src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324' />
      </header>
      <nav className='app-wrapper-nav'> 
        <div>
         <a> Profile </a>
        </div>
        <div>
          <a> Massages </a>
        </div>
        <div>
          <a> News </a>
        </div>
        <div>
          <a> Music </a>
        </div>
      </nav>
      <div className='app-wrapper-content'>
        <div>
        <img className='wrapper-content-banner' alt='#' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbkLH0wNu0EovL5M_IyCuUeVh2Nilhyxj_Q&usqp=CAU' />
      </div>  
      <div className='wrapper-content-user'>
        <img className='wrapper-content-user-img' src='https://www.zegna.com/bin/productImage.UY332.750.144.F.R4.jpeg%201x,%20/bin/productImage.UY332.750.144.F.R2.jpeg%202x'/>
        </div> 
      </div>
    </div>

  )
}

export default App;
