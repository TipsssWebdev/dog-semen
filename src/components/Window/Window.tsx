import React from 'react';
import styles from './Window.module.css';
import helperImg from '../../assets/helper.png';

interface WindowProps {
  title?: string;
  children: React.ReactNode;
}

export const Window: React.FC<WindowProps> = ({ title = 'Dog Website', children }) => {
  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <div className={styles.titleBarIcon} />
        <span className={styles.titleBarText}>{title}</span>
      </div>
      <div className={styles.menuBar}>
        <span className={styles.menuItem}>File</span>
        <span className={styles.menuItem}>View</span>
        <span className={styles.menuItem}>Special</span>
        <span className={styles.menuItem}>Woof</span>
      </div>
      <div className={styles.content}>
        {children}
        <div className={styles.helperContainer}>
          <img src={helperImg} alt="Helper" className={styles.helperImage} />
        </div>
      </div>
    </div>
  );
};
