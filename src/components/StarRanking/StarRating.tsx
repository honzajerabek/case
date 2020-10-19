import React, { useMemo } from 'react';
import styles from 'src/components/StarRanking/StarRating.module.scss';
import classNames from 'classnames';

type Props = {
  rating: number;
};

const StarRating = ({ rating }: Props) => {
  const stars = useMemo(() => {
    return [...Array(5)].map((_, index) => {
      const ratingDiff = rating - index;
      const isActive = ratingDiff > 0;

      return (
        <div key={`star${index + 1}`} className={classNames(styles.star)}>
          {isActive && (
            <div
              className={styles.fragmentOverlay}
              style={{ width: `${ratingDiff * 100}%` }}
            >
              <div className={classNames(styles.star, styles.active)} />
            </div>
          )}
        </div>
      );
    });
  }, [rating]);

  return <div className={styles.starRating}>{stars}</div>;
};

export default StarRating;
