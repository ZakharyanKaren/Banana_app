export interface FilterStateTypes {
  buttonsTexts: ButtonTextTypes[];
  filter: FilterTypes;
  activeBtn: number;
} 

export enum FilterTypes {
  Popular = 'popular',
  Favorite = 'favorite',
  New = 'new',
}

export type ButtonTextTypes = {
  id: number;
  text: FilterTypes;
}