import './App.css';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import Dinner from './components/Dinner';
import Sides from './components/Sides';

function App() {
  return (
    <div className="App">
      <Breakfast />
      <Lunch />
      <Dinner />
      <Sides />
    </div>
  );
}

export default App;
