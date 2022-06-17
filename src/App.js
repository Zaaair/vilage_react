import './scss/style.scss';
import { Router, Route} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import Header from './components/Header'
import Navigation from './components/Navigation';
import Main from './components/Main';
import Dialogs from './components/Dialogs';
import Massages from './components/Massages';
import News from './components/News';




const history = createHistory();


const App = () => {
  return (
    <Router history={history}>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path='/profile' exact component={Main} />
          <Route path='/dialogs'  component={Dialogs} />
          <Route path='/massages' exact component={Massages} />
          <Route path='/news' exact component={News} />
        </div>
      </div>
    </Router>
  )
}

export default App;
