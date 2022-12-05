import navbar from "./store/navbar/navbar";
import "./App.scss";
import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/homepage/HomePage";
import { SecondPage } from "./pages/secondPage/SecondPage";
import { ThirdPage } from "./pages/thirdPage/ThirdPage";
import { observer } from "mobx-react-lite";

export const App = observer(() => {
  return (
    <div className='App'>
      <Navbar />
      {navbar.activeLink === 1 ? (
        <SecondPage />
      ) : navbar.activeLink === 2 ? (
        <ThirdPage />
      ) : (
        <HomePage />
      )}
    </div>
  );
});
