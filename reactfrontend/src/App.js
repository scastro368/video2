import logo from './logo.svg';
import './App.css';

// importar componentes
import Compshowblogs from './blog/showblogs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <br></br>
      <Compshowblogs></Compshowblogs>
    </div>
  );
}

export default App;
