// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div class="banner">
          <h1>Jun Kim's Cisco-Project</h1>
        </div>
      </header>
      <main>
        <div class="exhibit">
          <h2>My Exhibit Heading</h2>
          <div class="exhibit-content">
            <img
              src="https://cdn.cookielaw.org/logos/03fc55fe-0057-4b2f-817d-763e7ecdb316/ad0fee7c-eecb-4e6d-b90f-8b6ca3a1e95c/cisco-logo-transparent.png"
              alt="cisco logo image"
            ></img>
          </div>

          <ul class="list-content">
            <li>Security everywhere for hybrid work anywhere</li>
            <li>Implement cloud your way</li>
            <li>Protect users, devices, and your network</li>
          </ul>
        </div>

        <div class="exhibit-panel">
          <ul class="tab-menu">
            <li class="active">Tab 1</li>
            <li>Tab 2</li>
            <li>Tab 3</li>
          </ul>
          <div class="tab-content active">
            <h2>Tab 1 Content</h2>
            <p>This is the content of tab 1.</p>
          </div>
          <div class="tab-content">
            <h2>Tab 2 Content</h2>
            <p>This is the content of tab 2.</p>
          </div>
          <div class="tab-content">
            <h2>Tab 3 Content</h2>
            <p>This is the content of tab 3.</p>
          </div>
        </div>
        
      </main>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
