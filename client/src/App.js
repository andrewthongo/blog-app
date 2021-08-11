import "./App.css";
import Home from "./components/home/Home";
import Homepage from "./components/pages/Homepage";
import { Switch } from "react-router-dom";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <Switch>
      <div>
        <Modal />
        <Home path="/" exact Component={Homepage} />
      </div>
    </Switch>
  );
}

export default App;
