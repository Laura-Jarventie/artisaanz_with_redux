import "./App.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initializeProducts } from "./store/actions/actions";
import Main from "./Containers/Main";
import Header from "./Containers/Header";
import Footer from "./Components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
