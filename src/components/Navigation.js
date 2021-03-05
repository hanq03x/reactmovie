import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div class="nav">
      {/* Link 를 import 해주는 이유는 페이지를 이동하지 않을 때도 새로고침하지 않게끔 해주기 위함이다. */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
