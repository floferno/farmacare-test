import Homepage from './pages/Homepage'
import PokemonDetail from './pages/PokemonDetail'
import UpdateStock from './pages/UpdateStock'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  return (
    // <Container>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/pokemon/:name" element={<PokemonDetail />} ></Route>
      <Route path="/update-stock" element={<UpdateStock />} ></Route>
    </Routes >
    // </Container >
  );
}

export default App;
