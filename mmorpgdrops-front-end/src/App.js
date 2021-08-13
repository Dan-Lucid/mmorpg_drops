import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import  { PlayerHiscores } from './components/PlayerHiscores';
import  { TeamHiscores } from './components/TeamHiscores';
import  { Players } from './components/Players';
import { Teams } from './components/Teams';
import { Records } from './components/Records';
import { Items } from './components/Items';

function App() {
  return (
    <div className="App">
      <h1>MMORPG Drops</h1>
      <hr/>
      <nav>
        <Link to='/Players'>Players</Link> &nbsp;
        <Link to='/Teams'>Teams</Link> &nbsp;
        <Link to='/Records'>Records</Link> &nbsp;
        <Link to='/Items'>Items</Link> &nbsp;
        <Link to='/PlayerHiscores'>Player Hiscores</Link> &nbsp; 
        <Link to='/TeamHiscores'>Team Hiscores</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/Players" element={<Players />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Records" element={<Records />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/PlayerHiscores" element={<PlayerHiscores />} />
        <Route path="/TeamHiscores" element={<TeamHiscores />} />
      </Routes>

    </div>
  );
}

export default App;