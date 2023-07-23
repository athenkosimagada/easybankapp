
import './App.css';
import { Header } from './containers';
import { Navbar } from './components';
import About from './containers/About/About';
import Blog from './containers/Blog/Blog';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Header />
        <About />
        <Blog />
        <Footer />
      </header>
    </div>
  );
}

export default App;
