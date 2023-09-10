// HamburgerMenu.tsx

import React, { useState } from 'react';
import HamburgerMenu from 'hamburger-react';

const MyHamburgerMenu: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex items-center">
      <HamburgerMenu
        toggled={isOpen}
        toggle={setOpen}
        size={30}
        color="#333"
      />
      <div className={`side-panel bg-gray-200 p-4 ${isOpen ? 'w-1/3' : 'w-0'}`}>
        <h2 className="text-xl font-bold mb-2">Additional Content</h2>
        <p>Some extra information goes here.</p>
      </div>
    </div>
  );
};

export default MyHamburgerMenu;
