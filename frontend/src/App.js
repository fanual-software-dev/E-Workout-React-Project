import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (

    <BrowserRouter>
        <Navbar></Navbar>
        <div className="App">
          <Routes>
            <Route 
            path='/'
            element={<Home/>}/>
          </Routes>
        </div>
    </BrowserRouter>

  );
}

export default App;
