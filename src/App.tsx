
import './App.css';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar'
import { Container } from './components/styledApp';

function App() {
  return (
    <Container>
     <NavBar/>
     <HomePage />
     </Container>
    
  );
}

export default App;
