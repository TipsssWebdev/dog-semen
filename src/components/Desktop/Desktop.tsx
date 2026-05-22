import React from 'react';
import styles from './Desktop.module.css';

interface DesktopProps {
  children: React.ReactNode;
}

export const Desktop: React.FC<DesktopProps> = ({ children }) => {
  return <div className={styles.desktop}>{children}</div>;
};
