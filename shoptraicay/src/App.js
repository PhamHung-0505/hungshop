import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./route";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import NavComponent from "./components/NavComponent/NavComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <NavComponent />
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            return <Route path={route.path} element={<Page />} />;
          })}
        </Routes>
      </Router>
      <FooterComponent/>
    </div>
  );
}

export default App;
