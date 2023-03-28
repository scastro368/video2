import logo from './logo.svg';
import './App.css';

// importar componentes
import Compshowblogs from './blog/showblogs';
import CompCreateBlog from './blog/createBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Compshowblogs/> } />
          <Route path='/create' element={ <CompCreateBlog/> } />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
