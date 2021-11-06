import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Home from "./components/Home";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
