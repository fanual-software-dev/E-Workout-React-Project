import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (

    <BrowserRouter>
        <Navbar></Navbar>
        <div className="App">
          <Routes>
            <Route 
            path='/'
            element={<Login/>}/>
          </Routes>
          <Routes>
            <Route 
            path='/workouts'
            element={<Home/>}/>
          </Routes>

          <Routes>
            <Route 
            path='/signup'
            element={<Signup/>}/>
          </Routes>
        </div>
    </BrowserRouter>

  );
}

export default App;
