// components/Modal.js

import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdCancel } from 'react-icons/md';
import Search from './search';

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Semi-transparent overlay */}
      <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={onClose}></div>

      <div className="relative z-50 rounded-lg bg-white p-4 shadow-lg dark:bg-black">
        <div className="flex items-center justify-between">
          <Search />
          <MdCancel color="red" size={34} onClick={onClose} className="ml-2" />
        </div>
        <ul className="mt-4 text-center">
          <li className="mb-3">
            <a href="/" className=" mb-6 text-lg hover:underline">
              Home
            </a>
          </li>
          <li className="mb-3">
            <a href="/clothes" className=" mb-6 text-lg hover:underline">
              Clothing
            </a>
          </li>
          <li className="mb-3">
            <a href="/souvenirs" className="mb-4 text-lg hover:underline">
              Souvenirs
            </a>
          </li>
          <li className="mb-5">
            <a href="/search/interior-decor" className="mb-4 text-lg hover:underline">
              Interior Decorations
            </a>
          </li>
        </ul>
        <div className="mt-3 flex w-full flex-row justify-center">
          <a href="https://wa.link/n1ed4y" target="blank">
            <BsWhatsapp size={30} className="mr-4" />
          </a>
          <a href="https://www.instagram.com/eko_atelier/" target="blank">
            <BsInstagram size={30} className="mr-4" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61551851506809" target="blank">
            <BsFacebook size={30} className="mr-4" />
          </a>
          <a href="https://twitter.com/Eko_Atelier" target="blank">
            <FaSquareXTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
