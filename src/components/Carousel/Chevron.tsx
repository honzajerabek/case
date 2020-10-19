import React, { SyntheticEvent } from 'react';
import styles from 'src/components/Carousel/Chevron.module.scss';
import classNames from 'classnames';

type Props = {
  prev?: boolean;
  next?: boolean;
  onClick?: (e: SyntheticEvent) => void;
};

const Chevron = ({ prev, next, onClick }: Props) => {
  return (
    <button
      className={classNames(
        styles.chevron,
        prev && styles.prev,
        next && styles.next,
      )}
      onClick={onClick}
    >
      {prev ? '<' : '>'}
    </button>
  );
};

export default Chevron;
