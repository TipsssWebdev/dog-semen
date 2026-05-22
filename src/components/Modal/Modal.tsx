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
    <h2><Icon src={dogIcon} /> O moej sobake</h2>
    <p><strong>Klichka:</strong> Semen</p>
    <p><strong>Poroda:</strong> Miniatyurnyj pudel</p>
    <p><strong>Vozrast:</strong> 5 mesyacev</p>
    <p><strong>Okras:</strong> Abrikosovyj</p>
    <p><strong>Ves:</strong> 3.5 kg</p>
    <p><strong>Lyubimaya eda:</strong> Indejka s risom i kusochki yabloka</p>
    <p><strong>Harakter:</strong> Umnyj, energichnyj, nemnogo hitryj</p>
    <h2><Icon src={noteIcon} /> Istoriya Semena</h2>
    <p>
      Semen poyavilsya v nashej seme v yanvare 2026 goda sovsem krohotnym shchenkom. 
      Ego nazvali v chest pradedushki - govoryat, u nih odinakovo hitryj vzglyad.
    </p>
    <p>
      Nesmotrya na yunyj vozrast, Semen uzhe uspel zavoevat serdca vseh sosedej 
      i stat zvezdoj dvora. Kazhdaya progulka prevrashchaetsya v mini-fotosessiyu!
    </p>
    <p>
      Obozhaet igrat s myachikom, gonyatsya za golubyami i vorovat noski. 
      Uzhe osvoil komandy: sidet, ko mne, i "gde tvoj myachik?".
    </p>
    <h2><Icon src={targetIcon} /> Lyubimye zanyatiya</h2>
    <ul>
      <li>Pryatatsya pod odeyalom</li>
      <li>Gryzt igrushki-pishchalki</li>
      <li>Vstrechat hozyaina s raboty</li>
      <li>Spat na kolenyah</li>
    </ul>
    <h2><Icon src={trophyIcon} /> Dostizheniya</h2>
    <ul>
      <li>Samyj pushistyj shchenok na rajone</li>
      <li>Nauchilsya prinosit tapochki (inogda oba)</li>
      <li>Ni razu ne pogryz provoda!</li>
    </ul>
  </div>
);

// Photo Modal Content
export const PhotoContent: React.FC = () => (
  <div>
    <h2><Icon src={cameraIcon} /> Fotogalereya</h2>
    <div className={styles.photoGrid}>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <div key={num} className={styles.photoPlaceholder}>
          <svg viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
          <span>Foto {num}</span>
          <span>skoro budet</span>
        </div>
      ))}
    </div>
  </div>
);

// Phone Numbers Modal Content
export const NumberContent: React.FC = () => (
  <div>
    <h2><Icon src={phoneIcon} /> Kontaktnye nomera</h2>
    <p>Svyazhites s nami po voprosam o sobake:</p>
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
    <h2><Icon src={chatIcon} /> Socialnye seti</h2>
    <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
      <span className={styles.socialIcon}><Icon src={telegramIcon} /></span>
      <div>
        <strong>Telegram</strong>
        <p style={{ fontSize: '10px', margin: 0 }}>Podpisyvajtes na kanal</p>
      </div>
    </a>
    <a href="#" className={styles.socialLink}>
      <span className={styles.socialIcon}><Icon src={maxIcon} /></span>
      <div>
        <strong>MAX Messenger</strong>
        <p style={{ fontSize: '10px', margin: 0 }}>Pishite v MAX</p>
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
      const newResult = Math.random() < 0.5 ? 'OREL' : 'RESHKA';
      setResult(newResult);
      setIsFlipping(false);
    }, 600);
  };

  return (
    <div className={styles.coinflipContainer}>
      <h2><Icon src={coinIcon} /> Podbros monetku</h2>
      <div 
        className={`${styles.coin} ${isFlipping ? styles.flipping : ''}`}
        onClick={flipCoin}
      >
        {result || '?'}
      </div>
      <button className={styles.flipButton} onClick={flipCoin} disabled={isFlipping}>
        {isFlipping ? 'Krutitsya...' : 'Podbrosit'}
      </button>
      {result && (
        <div className={styles.result}>
          Vypalo: {result}
        </div>
      )}
    </div>
  );
};
