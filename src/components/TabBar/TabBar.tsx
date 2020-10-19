import React, { useCallback, useMemo, useState } from 'react';
import ProductList from 'src/components/ProductList/ProductList';
import styles from './TabBar.module.scss';
import classNames from 'classnames';
import DummyComponent1 from 'src/components/TabBar/DummyComponent1';
import DummyComponent2 from 'src/components/TabBar/DummyComponent2';
import DummyComponent3 from 'src/components/TabBar/DummyComponent3';

const TABS = [
  { title: 'TOP', component: ProductList },
  { title: 'Nejprodavanejsi', component: DummyComponent1 },
  { title: 'Od Nejlevnejsiho', component: DummyComponent2 },
  { title: 'Od Nejdrazsiho', component: DummyComponent3 },
];

const TabBar = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const renderTabs = useCallback(() => {
    return (
      <div className={styles.tabs}>
        {TABS.map((tab, index) => {
          const isActive = index === activeTabIndex;
          return (
            <div
              key={tab.title}
              className={classNames(styles.item, isActive && styles.active)}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.title}
            </div>
          );
        })}
      </div>
    );
  }, [activeTabIndex]);

  const ActiveComponent = useMemo(() => TABS[activeTabIndex].component, [
    activeTabIndex,
  ]);

  return (
    <div className={styles.tabBar}>
      {renderTabs()}
      <div className={styles.content}>
        <ActiveComponent />
      </div>
    </div>
  );
};

export default TabBar;
