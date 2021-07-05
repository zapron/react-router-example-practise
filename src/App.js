import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./Browser-Router-Example/Loader";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Loader />
      </div>
    </Router>
  );
}
