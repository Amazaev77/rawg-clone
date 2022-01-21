export interface IMenuItem {
  id: number | string;
  name: string;
  link?: string;
}

export const menuList: IMenuItem[] = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Reviews', link: '/' },
  { id: 3, name: 'New Releases' },
  { id: 4, name: 'Top' },
  { id: 5, name: 'All Games', link: '/games' },
  { id: 6, name: 'Browse' },
  { id: 7, name: 'Platform' },
];
export interface ISubMenuItem {
  id: number;
  text: string;
  iconId: number;
  menuId: number;
}
export const subMenuList: ISubMenuItem[] = [
  { id: 1, text: 'Last 30 days', menuId: 3, iconId: 1 },
  { id: 2, text: 'This week', menuId: 3, iconId: 2 },
  { id: 3, text: 'Next week', menuId: 3, iconId: 3 },
  { id: 4, text: 'Release calendar', menuId: 3, iconId: 4 },
  { id: 5, text: 'Best of the year', menuId: 4, iconId: 5 },
  { id: 6, text: 'Popular in 2021', menuId: 4, iconId: 6 },
  { id: 7, text: 'All time 250', menuId: 4, iconId: 7 },
  { id: 8, text: 'Platforms', menuId: 6, iconId: 8 },
  { id: 9, text: 'Stories', menuId: 6, iconId: 9 },
  { id: 10, text: 'Collections', menuId: 6, iconId: 10 },
  { id: 11, text: 'Reviews', menuId: 6, iconId: 11 },
  { id: 12, text: 'Genres', menuId: 6, iconId: 12 },
  { id: 13, text: 'Creators', menuId: 6, iconId: 13 },
  { id: 14, text: 'Tags', menuId: 6, iconId: 14 },
  { id: 15, text: 'Developers', menuId: 6, iconId: 15 },
  { id: 16, text: 'Publishers', menuId: 6, iconId: 16 },
  { id: 17, text: 'PC', menuId: 7, iconId: 17 },
  { id: 18, text: 'Playstation 4', menuId: 7, iconId: 18 },
  { id: 19, text: 'Xbox One', menuId: 7, iconId: 19 },
  { id: 20, text: 'Nintendo Switch', menuId: 7, iconId: 20 },
  { id: 21, text: 'iOS', menuId: 7, iconId: 21 },
  { id: 22, text: 'Android', menuId: 7, iconId: 22 },
];
