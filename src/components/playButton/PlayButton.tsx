import { observer } from "mobx-react-lite";
import playButton from "../../images/playButton.png";
import { FC } from "react";
import "./playButton.scss";

export const PlayButton: FC = observer(() => {
  return (
    <div>
      <button className='playButton'>
        <img src={playButton} alt='playButton' />
      </button>
    </div>
  );
});
