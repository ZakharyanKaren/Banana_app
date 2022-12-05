import { FC } from "react";
import { observer } from "mobx-react-lite";
import "./mainContent.scss";
import content from "../../store/content/content";
import filter from "../../store/filterButtons/filterButtons";
import { PlayButton } from "../playButton/PlayButton";
import { CoursesInfo } from "../coursesInfo/CoursesInfo";

export const MainContent: FC = observer(() => {
  return (
    <div className='mainContentWrapper'>
      {content.items.map((item, index) => {
        return (
          item[filter.filterState.filter] && (
            <div key={item.id} className='itemWrapper'>
              <img src={item.image} alt={`contentImage ${index}`} />
              <div className='itemContentWrapper'>
                <CoursesInfo
                  title={item.title}
                  lessonsCount={item.lessonsCount}
                  time={item.time}
                />
                <PlayButton />
              </div>
            </div>
          )
        );
      })}
    </div>
  );
});
