import React from 'react';
import styles from './BuyButton.module.scss';
import './Transitions.scss';
import { Transition } from 'react-transition-group';
import classNames from 'classnames';
import useDropdownMenu from 'src/components/BuyButton/hooks';

const MENU_OPTIONS = [
  'Koupit zrychleně',
  'Porovnat',
  'Hlídat',
  'Přidat do seznamu',
];

type Props = {
  onBuyClick: () => void;
};

const BuyButton = ({ onBuyClick }: Props) => {
  const { wrapperRef, handleToggleMenu, isOpen } = useDropdownMenu();

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.buyButton}>
        <button onClick={onBuyClick}>Koupit</button>
        <button onClick={handleToggleMenu}>▼</button>
      </div>
      <Transition timeout={500} in={isOpen} mountOnEnter unmountOnExit>
        {(state) => (
          <div className={classNames(styles.menu, 'transition', 'menu', state)}>
            {MENU_OPTIONS.map((option) => {
              return (
                <div className={styles.menuItem} key={option}>
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default BuyButton;
