import { useCallback, useEffect, useRef, useState } from 'react';

const useDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, isOpen]);

  const handleToggleMenu = useCallback(
    () => setIsOpen((prevState) => !prevState),
    [],
  );

  return { wrapperRef, handleToggleMenu, isOpen };
};

export default useDropdownMenu;
