export interface MenuOption {
  optionId: number; // Long을 number로 변환
  optionName: string;
  optionPrice: number; // Integer를 number로 변환
  optionAvailable: boolean;
}

export interface Menu {
  menuId: number; // Long을 number로 변환
  menuName: string;
  isBest: boolean;
  isPopular: boolean;
  menuImage: string;
  description: string;
  price: number; // Integer를 number로 변환
  isSoldOut: boolean;
  isAvailable: boolean;
  options: MenuOption[];
}

export interface SoldoutMenu {
  menuId: number; // Long을 number로 변환
  menuName: string;
  menuImage: string;
  price: number; // Integer를 number로 변환
  isSoldOut: boolean;
}

export interface RegisterMenu {
  menuName: string;
  menuImage: string;
  description: string;
  price: string;
  options: RegisterOption[];
}
interface RegisterOption {
  optionName: string;
  optionPrice: number;
  optionAvailable: boolean;
}
