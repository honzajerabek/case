import React from 'react';
import styles from './PageHeader.module.scss';

type Props = {
  header: string;
};

const PageHeader = ({ header }: Props) => {
  return <h1 className={styles.header}>{header}</h1>;
};

export default PageHeader;
