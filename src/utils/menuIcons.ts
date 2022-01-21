import React from 'react';
import { menuIcons } from '../iconComponents';
import { IIconComponentProps } from '../iconComponents/MenuIconsSvg';

export interface IIcon {
  id: number | string;
  svgComponent: React.FC<IIconComponentProps>;
}

export const menuIconsData: IIcon[] = [
  { id: 1, svgComponent: menuIcons.StarIcon },
  { id: 2, svgComponent: menuIcons.FireIcon },
  { id: 3, svgComponent: menuIcons.NextIcon },
  { id: 4, svgComponent: menuIcons.CalendarIcon },
  { id: 5, svgComponent: menuIcons.CupIcon },
  { id: 6, svgComponent: menuIcons.BarIcon },
  { id: 7, svgComponent: menuIcons.CrownIcon },
  { id: 8, svgComponent: menuIcons.ControllerIcon },
  { id: 9, svgComponent: menuIcons.ArrowDownIcon },
  { id: 10, svgComponent: menuIcons.FolderIcon },
  { id: 11, svgComponent: menuIcons.CommentIcon },
  { id: 12, svgComponent: menuIcons.GenresIcon },
  { id: 13, svgComponent: menuIcons.CreatorsIcon },
  { id: 14, svgComponent: menuIcons.TagsIcon },
  { id: 15, svgComponent: menuIcons.DevelopersIcon },
  { id: 16, svgComponent: menuIcons.PublishersIcon },
  { id: 17, svgComponent: menuIcons.PcIcon },
  { id: 18, svgComponent: menuIcons.PlaystationIcon },
  { id: 19, svgComponent: menuIcons.XboxIcon },
  { id: 20, svgComponent: menuIcons.NintendoIcon },
  { id: 21, svgComponent: menuIcons.IosIcon },
  { id: 22, svgComponent: menuIcons.AndroidIcon },
];
