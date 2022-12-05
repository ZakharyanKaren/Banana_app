import { FC } from "react";
import { Header } from "../../components/header/Header";
import { MainContent } from "../../components/mainContent/MainContent";
import "./homePage.scss";

export const HomePage: FC = () => {
  return (
    <div className='homePageWrapper'>
      <Header />
      <MainContent />
    </div>
  );
};
