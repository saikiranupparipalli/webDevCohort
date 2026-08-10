import "./App.css";
import { useCountry } from "./Hooks/CustomHook";
import { Count } from "./Components/count";
import * as React from "react";

function App() {
  const [coun, fetchRes, fetching, error] = useCountry();
  const [count, setCount] = React.useState(0);

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="app-badge">⚡ React Refresher</div>
        <h1 className="app-title">Interactive Component Playground</h1>
        <p className="app-subtitle">
          Explore custom hooks & interactive state components
        </p>
      </header>

      <main className="dashboard-grid">
        <Count />

        <div className="country-card">
          <div className="country-header">
            <span className="country-card-title">Custom Hook Showcase</span>
            <span
              className={`country-status-badge ${fetching ? "loading" : ""}`}
            >
              {fetching ? "Fetching..." : coun ? "Loaded" : "Idle"}
            </span>
          </div>

          <div className="country-display-area">
            {fetching ? (
              <div className="loading-box">
                <div className="spinner" />
                <span>Fetching Country Data...</span>
              </div>
            ) : coun ? (
              <div className="country-info">
                <span className="country-label">Discovered Country</span>
                <h2 className="country-name">🌍 {coun.name}</h2>
              </div>
            ) : (
              <div className="country-placeholder">
                <span className="globe-icon">🌐</span>
                <span>Click fetch to discover a country</span>
              </div>
            )}
          </div>

          {error && (
            <div className="error-banner">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          <button
            className="fetch-btn"
            onClick={fetchRes}
            disabled={Boolean(fetching)}
          >
            <span>{fetching ? "Fetching Data..." : "Fetch Next Country"}</span>
          </button>
        </div>
      </main>

      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count
        </button>
        <div>
          {new Array(count).fill(null).map((e) => (
            <Count />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
