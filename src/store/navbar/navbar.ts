import { makeAutoObservable } from "mobx";
import { image1, image2, image3 } from "../../constants/navbarIcons";
import { ImageTypes } from "./types";

class Navbar {
  activeLink: number = 0;
  imagesArr: ImageTypes[] = [
    { id: 0, page: "", image: image1 },
    { id: 1, page: "second", image: image2 },
    { id: 2, page: "third", image: image3 },
  ];

  constructor() {
    console.log(typeof image1);
    makeAutoObservable(this);
  }

  setActiveLink(id: number) {
    this.activeLink = id;
  }
}

export default new Navbar();
