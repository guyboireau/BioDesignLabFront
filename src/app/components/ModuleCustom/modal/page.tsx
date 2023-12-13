import React, { useState } from 'react';
import Modal from 'react-modal';

const Layout: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

const closeModal = () => {
    setModalIsOpen(false);
};

return (
    <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <button onClick={closeModal}>Fermer</button>
            <div>Contenu de la fenêtre modale</div>
            {/* <p>Vous avez sélectionné {imageAlt}</p> */}
        </Modal>
    </div>
);
};

export default Layout;