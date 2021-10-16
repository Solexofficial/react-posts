import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRounter';
import NavBar from './components/UI/Navbar/Navbar';
import './styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
