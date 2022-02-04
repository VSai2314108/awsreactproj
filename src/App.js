import './App.css';
import headshot from './headshot.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to VijayaSai's Career Page
        </p>
        <img className="photo" src={headshot}></img>
        <a
          className="App-link"
          href="https://github.com/VSai2314108"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/vijayasai23/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
