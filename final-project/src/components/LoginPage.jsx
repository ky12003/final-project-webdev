import { useState } from "react";
import Modal from 'react-modal';
import '../css/LoginPage.css'

function LoginPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>

    </>
  );
}

export default LoginPage;
