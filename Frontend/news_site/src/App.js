import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import FunComponent from './components/FunComponent';
import MyClass from './components/MyClass';

function App() {

  function clicked() {
    alert("Inside App.js")
}


  return (
    <div className="container">
      <Hello name = "Johnny"/>
      <MyClass email = "jwill@will.com" myclick={clicked}/>
    </div>
  );
}

export default App;
