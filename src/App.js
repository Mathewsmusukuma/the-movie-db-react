import React from "react";
import "./App.css";
import Movies from "./components/movies";

function App() {
  const myUrl = "localhost:300/";
  return (
    <div>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand active" href={myUrl}>
                The movie DB
              </a>
            </div>
          </div>
        </nav>
      </div>
      <main className="container">
        <Movies />
      </main>
    </div>
  );
}

export default App;
