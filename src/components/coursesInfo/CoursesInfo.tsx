import { FC } from "react";
import "./coursesInfo.scss";

interface Props {
  title: string;
  lessonsCount: number;
  time: number;
}

export const CoursesInfo: FC<Props> = ({ title, lessonsCount, time }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p className='lessonsCount'>{lessonsCount} lessons</p>
      </div>
      <p className='time'>{time} min</p>
    </div>
  );
};
