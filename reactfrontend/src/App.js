import logo from './logo.svg';
import './App.css';

// importar componentes
import Compshowblogs from './blog/showblogs';
import CompCreateBlogs from './blog/createblogs';
import ComEditBlogs from './blog/editblogs';

// importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />        
</header>
<BrowserRouter>
  <Routes>
      <Route path='/blogs' element={ <Compshowblogs />} />
      <Route path='/blogs/create' element={ <CompCreateBlogs />} />
      <Route path='/blogs/edit/:id' element={ <ComEditBlogs />} />
  </Routes>
</BrowserRouter>

</div>
  );
}

export default App;
