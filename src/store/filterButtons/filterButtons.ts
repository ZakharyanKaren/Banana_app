import { makeAutoObservable } from "mobx";
import { FilterStateTypes, FilterTypes } from "./types";

class Filter {
  filterState: FilterStateTypes = {
    buttonsTexts: [
      {id: 0, text: FilterTypes.Popular},
      {id: 1, text: FilterTypes.Favorite},
      {id: 2, text: FilterTypes.New}
    ],
    filter: FilterTypes.Popular,
    activeBtn: 0
  }

  constructor() {
    makeAutoObservable(this);
  }

  filterBy = (filter: number): void => {
    switch (filter) {
      case 0:
        this.filterState.filter = FilterTypes.Popular;
        break;
      case 1:
        this.filterState.filter = FilterTypes.Favorite;
        break;
      case 2:
        this.filterState.filter = FilterTypes.New;
        break;
    }
  }

  setActiveBtn = (id: number): void => {
    this.filterState.activeBtn = id;
  }
}

export default new Filter();
