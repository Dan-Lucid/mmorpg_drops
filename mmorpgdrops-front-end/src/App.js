import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import  { PlayerHiscores } from './components/PlayerHiscores';
import  { TeamHiscores } from './components/TeamHiscores';

function App() {
  return (
    <div className="App">
      <h1>MMORPG Drops</h1>
      <hr/>
      <nav>
        <Link to='/PlayerHiscores'>Player Hiscores</Link> &nbsp; 
        <Link to='/TeamHiscores'>Team Hiscores</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/PlayerHiscores" element={<PlayerHiscores />} />
        <Route path="/TeamHiscores" element={<TeamHiscores />} />
      </Routes>

    </div>
  );
}

export default App;