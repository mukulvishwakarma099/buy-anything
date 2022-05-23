import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";

function Header({ cart }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "4rem" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light fs-3">
            Navbar
          </NavLink>
          <div>
            <Badge badgeContent={cart.length} color="primary">
              <FiShoppingCart
                style={{ color: "skyblue", fontSize: "1.4rem" }}
              />
            </Badge>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
