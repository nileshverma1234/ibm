import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Homepage from './pages/Homepage';
import Workpage from './pages/Workpage';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Homepage} exact />
      <Route path='/work' component={Workpage} />
    </div> 
  );
}

export default App;
