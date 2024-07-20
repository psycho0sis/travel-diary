export interface INavigationData {
  id: number;
  title: string;
  route: string;
  submenu?: INavigationData[];
}

export interface INavigation {
  navigation: INavigationData[];
}
