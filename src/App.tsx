import { useState } from 'react';
import { Desktop } from './components/Desktop';
import { Window } from './components/Window';
import { FolderIcon } from './components/FolderIcon';
import { 
  Modal, 
  AboutContent, 
  PhotoContent, 
  NumberContent, 
  SocialContent, 
  CoinFlipContent 
} from './components/Modal';

import aboutIcon from './assets/icons/about.svg';
import photoIcon from './assets/icons/photo.svg';
import phoneIcon from './assets/icons/phone.svg';
import socialIcon from './assets/icons/social.svg';
import coinflipIcon from './assets/icons/coinflip.svg';

import './styles/global.css';

type ModalType = 'about' | 'photo' | 'number' | 'social' | 'coinflip' | null;

function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const folders = [
    { id: 'about', icon: aboutIcon, label: 'About' },
    { id: 'photo', icon: photoIcon, label: 'Photo' },
    { id: 'number', icon: phoneIcon, label: 'Number' },
    { id: 'social', icon: socialIcon, label: 'Social Media' },
    { id: 'coinflip', icon: coinflipIcon, label: 'Coinflip' },
  ] as const;

  const modalTitles: Record<string, string> = {
    about: 'About - О собаке',
    photo: 'Photo - Фотографии',
    number: 'Number - Телефоны',
    social: 'Social Media - Соцсети',
    coinflip: 'Coinflip - Монетка',
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'about':
        return <AboutContent />;
      case 'photo':
        return <PhotoContent />;
      case 'number':
        return <NumberContent />;
      case 'social':
        return <SocialContent />;
      case 'coinflip':
        return <CoinFlipContent />;
      default:
        return null;
    }
  };

  return (
    <Desktop>
      <Window title="My Dog">
        {folders.map((folder) => (
          <FolderIcon
            key={folder.id}
            icon={folder.icon}
            label={folder.label}
            onClick={() => setActiveModal(folder.id as ModalType)}
          />
        ))}
      </Window>

      <Modal
        title={activeModal ? modalTitles[activeModal] : ''}
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
      >
        {renderModalContent()}
      </Modal>
    </Desktop>
  );
}

export default App;
