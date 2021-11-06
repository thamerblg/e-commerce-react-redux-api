import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((state) => state.cart.productsCart);

  return (
    <div>
      <Navbar>
        <Container>
          <Link to="/">
            <Navbar.Brand className="header-logo">
              <img src={logo} alt="Sneakers-logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Collapse className="justify-content-end">
            <Link to="/cart" className="cart-link">
              <div className="header-cart">
                <strong>My cart</strong>
                <span className="header-cart-amount">
                  {state.length}
                  <span className="screen-reader-only">items</span>
                </span>
                <img
                  aria-hidden="true"
                  className="header-cart-logo"
                  src={cart}
                  alt="Cart icon"
                />
              </div>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
