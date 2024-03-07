import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import AllProducts from "./components/Products/AllProducts";
import Login from "./components/Login-Reg/Login";
import Register from "./components/Login-Reg/Register";
import Favs from "./components/Favs/Favs";
import { useState, useReducer } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function favsReducer(state, action) {
  if (action.type === "ADD") {
    const newFavs = [...state, action.id];
    return [...new Set(newFavs)];
  }
  if (action.type === "REMOVE") {
    const newFavs = state.filter((fav) => fav !== action.id);
    return newFavs;
  }
}
export default function App() {
    const [logged,setLogged] = useState(false);
    const logUser = () => {
        setLogged(true);
    }
  const [cartItems, setCart] = useState([]);
  const qtyHandler = (i) => {
    console.log(i);
    let newCart = [...cartItems];
    newCart.push(i);
    setCart([...new Set(newCart)]);
  };
  const [favs, dispatch] = useReducer(favsReducer, []);
  const favsHandler = (i) => {
    dispatch({ type: "ADD", id: i });
    console.log(favs);
  };
  const favRemoveHandler = (i) => {
    dispatch({ type: "REMOVE", id: i });
  };
  return (
    <Router>
    <NavBar loggedIn={logged} qty={cartItems.length} favs={favs.length} />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Header />
              <AllProducts
                removeFav={favRemoveHandler}
                manageFavs={favsHandler}
                addToCart={qtyHandler}
              />
            </main>
          }
        />
        <Route path="/login" element={<Login logHandler = {logUser}/>} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/favs"
          element={<Favs qnty={cartItems.length} favIds={favs} />}
        />
      </Routes>
    </Router>
  );
}
