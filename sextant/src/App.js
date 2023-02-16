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
              alt="cisco logo imange"
            ></img>
          </div>

          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>

          <table>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
            <tr>
              <td>Row 1, Column 1</td>
              <td>Row 1, Column 2</td>
            </tr>
            <tr>
              <td>Row 2, Column 1</td>
              <td>Row 2, Column 2</td>
            </tr>
          </table>
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
