import React, { useState } from 'react';
import styles from './Modal.module.css';

// Import retro icons
import dogIcon from '../../assets/icons/retro/dog.svg';
import noteIcon from '../../assets/icons/retro/note.svg';
import targetIcon from '../../assets/icons/retro/target.svg';
import trophyIcon from '../../assets/icons/retro/trophy.svg';
import cameraIcon from '../../assets/icons/retro/camera.svg';
import phoneIcon from '../../assets/icons/retro/phone.svg';
import chatIcon from '../../assets/icons/retro/chat.svg';
import telegramIcon from '../../assets/icons/retro/telegram.svg';
import maxIcon from '../../assets/icons/retro/max.svg';
import coinIcon from '../../assets/icons/retro/coin.svg';

const Icon: React.FC<{ src: string; alt?: string }> = ({ src, alt = '' }) => (
  <img src={src} alt={alt} className={styles.retroIcon} />
);

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.titleBar}>
          <div className={styles.closeButton} onClick={onClose}>x</div>
          <span className={styles.titleBarText}>{title}</span>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

// About Modal Content
export const AboutContent: React.FC = () => (
  <div>
    <h2><Icon src={dogIcon} /> О моей собаке</h2>
    <p><strong>Кличка:</strong> Семён</p>
    <p><strong>Порода:</strong> Миниатюрный пудель</p>
    <p><strong>Возраст:</strong> 5 месяцев</p>
    <p><strong>Окрас:</strong> Абрикосовый</p>
    <p><strong>Вес:</strong> 3.5 кг</p>
    <p><strong>Любимая еда:</strong> Индейка с рисом и кусочки яблока</p>
    <p><strong>Характер:</strong> Умный, энергичный, немного хитрый</p>
    <h2><Icon src={noteIcon} /> История Семёна</h2>
    <p>
      Семён появился в нашей семье в январе 2026 года совсем крохотным щенком. 
      Его назвали в честь прадедушки — говорят, у них одинаково хитрый взгляд.
    </p>
    <p>
      Несмотря на юный возраст, Семён уже успел завоевать сердца всех соседей 
      и стать звездой двора. Каждая прогулка превращается в мини-фотосессию!
    </p>
    <p>
      Обожает играть с мячиком, гоняться за голубями и воровать носки. 
      Уже освоил команды: сидеть, ко мне, и "где твой мячик?".
    </p>
    <h2><Icon src={targetIcon} /> Любимые занятия</h2>
    <ul>
      <li>Прятаться под одеялом</li>
      <li>Грызть игрушки-пищалки</li>
      <li>Встречать хозяина с работы</li>
      <li>Спать на коленях</li>
    </ul>
    <h2><Icon src={trophyIcon} /> Достижения</h2>
    <ul>
      <li>Самый пушистый щенок на районе</li>
      <li>Научился приносить тапочки (иногда оба)</li>
      <li>Ни разу не погрыз провода!</li>
    </ul>
  </div>
);

// Photo Modal Content
export const PhotoContent: React.FC = () => (
  <div>
    <h2><Icon src={cameraIcon} /> Фотогалерея</h2>
    <div className={styles.photoGrid}>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <div key={num} className={styles.photoPlaceholder}>
          <svg viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
          <span>Фото {num}</span>
          <span>скоро будет</span>
        </div>
      ))}
    </div>
  </div>
);

// Phone Numbers Modal Content
export const NumberContent: React.FC = () => (
  <div>
    <h2><Icon src={phoneIcon} /> Контактные номера</h2>
    <p>Свяжитесь с нами по вопросам о собаке:</p>
    <a href="tel:89126128355" className={styles.phoneNumber}>
      <Icon src={phoneIcon} /> 8 (912) 612-83-55
    </a>
    <a href="tel:89331732911" className={styles.phoneNumber}>
      <Icon src={phoneIcon} /> 8 (933) 173-29-11
    </a>
  </div>
);

// Social Media Modal Content
export const SocialContent: React.FC = () => (
  <div>
    <h2><Icon src={chatIcon} /> Социальные сети</h2>
    <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
      <span className={styles.socialIcon}><Icon src={telegramIcon} /></span>
      <div>
        <strong>Telegram</strong>
        <p style={{ fontSize: '10px', margin: 0 }}>Подписывайтесь на канал</p>
      </div>
    </a>
    <a href="#" className={styles.socialLink}>
      <span className={styles.socialIcon}><Icon src={maxIcon} /></span>
      <div>
        <strong>MAX Messenger</strong>
        <p style={{ fontSize: '10px', margin: 0 }}>Пишите в MAX</p>
      </div>
    </a>
  </div>
);

// CoinFlip Modal Content
export const CoinFlipContent: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoin = () => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setResult(null);
    
    setTimeout(() => {
      const newResult = Math.random() < 0.5 ? 'ОРЁЛ' : 'РЕШКА';
      setResult(newResult);
      setIsFlipping(false);
    }, 600);
  };

  return (
    <div className={styles.coinflipContainer}>
      <h2><Icon src={coinIcon} /> Подбрось монетку</h2>
      <div 
        className={`${styles.coin} ${isFlipping ? styles.flipping : ''}`}
        onClick={flipCoin}
      >
        {result || '?'}
      </div>
      <button className={styles.flipButton} onClick={flipCoin} disabled={isFlipping}>
        {isFlipping ? 'Крутится...' : 'Подбросить'}
      </button>
      {result && (
        <div className={styles.result}>
          Выпало: {result}
        </div>
      )}
    </div>
  );
};
