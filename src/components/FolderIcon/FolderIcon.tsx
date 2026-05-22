import React from 'react';
import styles from './FolderIcon.module.css';

interface FolderIconProps {
  icon: string;
  label: string;
  onClick?: () => void;
  selected?: boolean;
}

export const FolderIcon: React.FC<FolderIconProps> = ({ 
  icon, 
  label, 
  onClick, 
  selected = false 
}) => {
  return (
    <div 
      className={`${styles.folderIcon} ${selected ? styles.selected : ''}`}
      onClick={onClick}
      onDoubleClick={onClick}
    >
      <img src={icon} alt={label} className={styles.iconImage} />
      <span className={styles.label}>{label}</span>
    </div>
  );
};
