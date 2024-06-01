import HomePage from "../page/HomePage/HomePage";
import ProductPage from "../page/ProductPage/ProductPage";
import AboutPage from "../page/AboutPage/AboutPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/home",
    page: HomePage,
  },
  {
    path: "/about",
    page: AboutPage,
  },
  {
    path: "/product",
    page: ProductPage,
  },
];
