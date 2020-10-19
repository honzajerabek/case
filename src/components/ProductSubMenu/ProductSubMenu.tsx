import React from 'react';
import styles from './ProductSubMenu.module.scss';

const MENU_ITEMS = [
  'Macbook',
  'Herni',
  'Kancelarske',
  'Profesionalni',
  'Stylove',
  'Zakladni',
  'Dotykove',
  'Na splatky',
  'VR Ready',
  'IRIS Graphics',
  'Brasny, batohy',
  'Prislusenstvi',
];

const ProductSubMenu = () => {
  return (
    <div className={styles.menu}>
      {MENU_ITEMS.map((item) => {
        return (
          <div key={item} className={styles.item}>
            <div>
              <button key={item}>{item}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductSubMenu;
