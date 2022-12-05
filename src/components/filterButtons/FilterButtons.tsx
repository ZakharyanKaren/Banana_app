import { FC } from "react";
import "./filterButtons.scss";
import { observer } from "mobx-react-lite";
import filter from "../../store/filterButtons/filterButtons";

export const FilterButtons: FC = observer(() => {
  function handleFilterBtnClick(id: number) {
    filter.setActiveBtn(id);
    filter.filterBy(id);
  }

  return (
    <div className='filterButtons'>
      {filter.filterState.buttonsTexts.map(({ id, text }) => {
        return (
          <div
            key={id}
            onClick={() => handleFilterBtnClick(id)}
            className={`${
              filter.filterState.activeBtn === id ? "activeBtn" : ""
            }`}
          >
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
});
