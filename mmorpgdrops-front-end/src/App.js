import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import  { PlayerHiscores } from './components/PlayerHiscores';
import  { TeamHiscores } from './components/TeamHiscores';
import  { Players } from './components/Players';
import { Teams } from './components/Teams';
function App() {
  return (
    <div className="App">
      <h1>MMORPG Drops</h1>
      <hr/>
      <nav>
        <Link to='/PlayerHiscores'>Player Hiscores</Link> &nbsp; 
        <Link to='/TeamHiscores'>Team Hiscores</Link> &nbsp;
        <Link to='/Players'>Players</Link> &nbsp;
        <Link to='/Teams'>Teams</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/PlayerHiscores" element={<PlayerHiscores />} />
        <Route path="/TeamHiscores" element={<TeamHiscores />} />
        <Route path="/Players" element={<Players />} />
        <Route path="/Teams" element={<Teams />} />
      </Routes>

    </div>
  );
}

export default App;