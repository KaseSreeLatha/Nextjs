import React, { useState, useEffect, useRef } from 'react';
import { LanguageIcon } from '@heroicons/react/24/solid'

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguagecode, setSelectedLanguageCode] = useState<string>('EN');

  const languages = [
    { code: 'EN', name: 'English - EN' },
    { code: 'HI', name: 'हिन्दी - HI' },
    { code: 'TA', name: 'தமிழ் - TA' },
    { code: 'TE', name: 'తెలుగు - TE' },
    { code: 'KN', name: 'ಕನ್ನಡ - KN' },
    { code: 'ML', name: 'മലയാളം - ML' },
    { code: 'Bn', name: 'বাংলা - BN' },
    { code: 'MR', name: 'मराठी - MR' }
  ];
  

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguageCode(code);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && 
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); 
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown',handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative">
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 opacity-50 z-10" />
      )}
      <div className='flex items-center space-x-1'>
      <LanguageIcon className='w-4 h-4'/>
      <button
        ref={buttonRef}
        className="font-medium cursor-pointer text-blue-500"
        onClick={toggleDropdown}
      >
        <div className="absolute left-full top-[10px] w-1 h-2 border-l-[8px] border-r-[8px] border-t-[8px] border-t-gray-500 border-l-transparent border-r-transparent" />
        <p className='mr-1'>{selectedLanguagecode}</p>
      </button>
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute bg-white text-black font-medium rounded shadow-xl mt-2 p-2 w-40 z-20 -left-3"
        >
          <div className="absolute left-[40%] top-[-8px] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent" />
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="w-full text-left p-2 hover:text-[#f08804] hover:underline"
              onClick={() => handleLanguageSelect(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;