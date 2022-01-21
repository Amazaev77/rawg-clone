import React, { FC, useState } from 'react';
import styles from './List.module.scss';
import { subMenuList } from '../../../utils/menuList';
import ListItem from '../ListItem';
import { ArrowSvg } from '../../../iconComponents';

interface IListProps {
  menuItemId: number | string;
}

const List: FC<IListProps> = ({ menuItemId }) => {
  const [isTruncateList, setIsTruncateList] = useState<boolean>(true);

  const fullList = subMenuList.filter(
    (listItem) => listItem.menuId === menuItemId
  );

  const truncateList = fullList.filter((el, idx) => idx < 4);

  const list = isTruncateList ? truncateList : fullList;

  const handleTruncateList = () => {
    setIsTruncateList(!isTruncateList);
  };

  const isExistSubMenu = subMenuList.some((el) => el.menuId === menuItemId);

  if (!isExistSubMenu) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {list.map((listItem) => {
        return <ListItem key={listItem.id} listItem={listItem} />;
      })}
      {fullList.length > 4 && (
        <li className={styles.list_item}>
          <div
            className={styles.list_item_wrap}
            onClick={handleTruncateList}
            role="menuitem"
            aria-hidden="true"
          >
            <div className={styles.list_item_wrap_icon}>
              <ArrowSvg
                className={
                  isTruncateList
                    ? styles.list_item_wrap_arrow_bottom
                    : styles.list_item_wrap_arrow_top
                }
                width={18}
                height={18}
              />
            </div>
            <div className={styles.list_item_wrap_text}>
              {isTruncateList ? 'Show all' : 'Hide'}
            </div>
          </div>
        </li>
      )}
    </ul>
  );
};

export default List;
