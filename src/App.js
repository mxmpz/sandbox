
import './App.css';
import Clock from './components/Clock';
import Button from './components/Button';
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div className="App">
      <Clock interval ={1000}/>
      <Clock interval ={2000}/>
      <Clock interval ={3000}/>
      <Button />
      <ConditionalRender isLoggedIn={true} />
    </div>
  );
}

export default App;
