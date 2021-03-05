import React from "react";
// Browser Router는 # 표시가 없어서 주소창이 더 깔끔해지지만, gh-pages에서 설정해주기가 애매하다.
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      {/* Link (Navigation) 은 Router 안에서만 사용이 가능하다. */}
      <Navigation />
      {/* exact={true} 는 /가 중복으로 렌더링하지 않게 끔 방지해주는 역할을 한다 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
