
import './App.css';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <Clock interval ={1000}/>
      <Clock interval ={2000}/>
      <Clock interval ={3000}/>
      <Button />
    </div>
  );
}

export default App;
