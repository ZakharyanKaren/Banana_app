import "./navbar.scss";
import { observer } from "mobx-react-lite";
import navbar from "../../store/navbar/navbar";
import { FC } from "react";

export const Navbar: FC = observer(() => {
  return (
    <div className='navbarWrapper'>
      <div className='sectionsWrapper'>
        {navbar.imagesArr.map(({ id, image }) => {
          return (
            <div
              key={id}
              className={`imagesWrapper ${
                navbar.activeLink === id ? "activeLink" : ""
              }`}
              onClick={() => navbar.setActiveLink(id)}
            >
              {image as JSX.Element}
            </div>
          );
        })}
      </div>
    </div>
  );
});
