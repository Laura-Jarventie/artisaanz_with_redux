import './App.css';
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initializeProducts } from "./store/actions/actions";
import Main from "./Containers/Main";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
