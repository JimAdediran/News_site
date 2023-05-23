import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import FunComponent from './components/FunComponent';
import MyClass from './components/MyClass';

function App() {
  return (
    <div className="App">
      <Hello name = "Johnny" lastname = "Williams"/>
      <MyClass email = "jwill@will.com"/>
    </div>
  );
}

export default App;
