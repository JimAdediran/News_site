import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import FunComponent from './components/FunComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello React Application</h1>
      <Hello/>
      <FunComponent/>
    </div>
  );
}

export default App;
