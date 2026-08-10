import * as React from "react";
import "./count.css";

export function Count() {
  const [count, setCount] = React.useState<number>(0);

  function Increment() {
    if (count !== 10) {
      setCount(count + 1);
    } else {
      setCount(count);
    }
  }
  function Decrement() {
    if (count !== 0) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  }

  const isMin = count === 0;
  const isMax = count === 10;
  const progressPercent = (count / 10) * 100;

  return (
    <div className="counter-card">
      <div className="counter-header">
        <span className="counter-title">Counter Component</span>
        <span className={`counter-badge ${isMin ? "min" : isMax ? "max" : ""}`}>
          {isMin ? "Min (0)" : isMax ? "Max (10)" : `${count} / 10`}
        </span>
      </div>

      <div className="counter-display-wrapper">
        <div className="counter-glow" />
        <h1 className="counter-value">{count}</h1>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="counter-actions">
        <button
          className="counter-btn counter-btn-dec"
          onClick={Decrement}
          disabled={isMin}
          title={isMin ? "Reached minimum limit" : "Decrement count"}
        >
          <span className="btn-icon">−</span>
          <span>Decrement</span>
        </button>

        <button
          className="counter-btn counter-btn-inc"
          onClick={Increment}
          disabled={isMax}
          title={isMax ? "Reached maximum limit" : "Increment count"}
        >
          <span className="btn-icon">+</span>
          <span>Increment</span>
        </button>
      </div>
    </div>
  );
}

