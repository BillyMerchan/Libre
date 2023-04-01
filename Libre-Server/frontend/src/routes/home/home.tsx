import NavBar from "../../Navbar";
import LibreLogo from "../../logo.svg"
function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1> Libre </h1>
        <img src={LibreLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
    </div>
  );
}

export default Home;
