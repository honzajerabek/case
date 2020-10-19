import React from 'react';
import styles from 'src/components/Page/Page.module.scss';
import PageHeader from 'src/components/PageHeader/PageHeader';

type Props = {
  header: string;
};

const Page: React.FC<Props> = ({ children, header }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <PageHeader header={header} />
        {children}
      </div>
    </div>
  );
};

export default Page;
