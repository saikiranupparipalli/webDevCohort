import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Brokencup from "./Brokencup.jsx";
import { ErrorBoundary } from "react-error-boundary";
 
function Fallback({ error }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}

function App() {
  
  return (
    <>
      <h1 style={{ backgroundColor: "black", color: "skyblue" }}>
        Hello from react
      </h1>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Brokencup />
      </ErrorBoundary>
    </>
  );
}

export default App;
