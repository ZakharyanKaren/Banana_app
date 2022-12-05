import { FC } from "react";
import { FilterButtons } from "../filterButtons/FilterButtons";
import { HeaderTitle } from "../headerTitle/HeaderTitle";
import "./header.scss";

export const Header: FC = () => {
  return (
    <div className='headerWrapper'>
      <HeaderTitle />
      <FilterButtons />
    </div>
  );
};
