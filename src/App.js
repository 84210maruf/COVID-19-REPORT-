import './App.css';
import CovidSummery from './components/CovidSummery';
import LineGraph from './components/LineGraph';

function App() {
  return (
    <div className="App">
      <CovidSummery 
        totalConfirmed={10}
        totalRecovered={10}
        totalDeaths={2}
        country={'Bangladesh'}
      />
      <LineGraph/>
    </div>
  );
}

export default App;
