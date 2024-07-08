import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import About from './routes/About';
import Projects from './routes/Projects';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </div>
  );
}

export default App;
