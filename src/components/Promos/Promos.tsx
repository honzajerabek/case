import React from 'react';
import { Promo } from 'src/pages/products/types';
import styles from 'src/components/Promos/Promos.module.scss';

type Props = {
  promos: Promo[];
};

const Promos = ({ promos }: Props) => {
  return (
    <div className={styles.promos}>
      {promos.map((promo) => (
        <div key={promo.id} className={styles.promo}>
          <span className={styles.free}>Zdarma</span> {promo.name}
        </div>
      ))}
    </div>
  );
};

export default Promos;
