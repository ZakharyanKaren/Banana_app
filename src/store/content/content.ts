import { makeAutoObservable } from "mobx";
import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import { ItemTypes } from "./types";

class Content {
  items: ItemTypes[] = [
    {
      id: 1,
      image: image1,
      title: "Illustration",
      lessonsCount: 24,
      time: 134,
      popular: true,
      favorite: false,
      new: true,
    },
    {
      id: 2,
      image: image2,
      title: "Graphic design",
      lessonsCount: 30,
      time: 236,
      popular: true,
      favorite: true,
      new: false,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Content();
