import classNames from "classnames";
import MenuIcon from '@mui/icons-material/MenuRounded';
import useScroll from "../../hooks/useScroll";
import { Link } from "react-router-dom";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/CloseRounded';

const Header: React.FC = () => {
  const { completion, isScrolled } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={classNames(
        'fixed top-0 w-full z-50 transition-all duration-500 ease-in-out py-4',
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="w-full flex items-center px-4 relative">
        {/* 왼쪽: 메뉴 */}
        <button 
          className="text-sm flex justify-start"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MenuIcon 
            sx={{
              color: isScrolled ? undefined : "white"
            }}
          />
        </button>

        {/* 가운데: 로고 */}
        <Link to='/' className={classNames("text-xl font-bold tracking-wider flex justify-center w-full", isScrolled ? "text-black" : "text-white")}>
          BRAND UP
        </Link>
      </div>
      
      {/* Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-black transition-opacity duration-500 ease-in-out"
          style={{ opacity: isOpen ? 0.5 : 0 }}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Drawer Content */}
        <div 
          className={`absolute top-0 left-0 w-1/3 h-full bg-black p-4 transition-transform duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button 
            className="flex justify-start size-4 text-white mb-10" 
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon/>
          </button>
          <div className="flex flex-col gap-4 pl-1">
            <a 
              href='#combined' 
              onClick={(e) => handleSmoothScroll(e, 'combined')} 
              className="text-sm text-white hover:text-gray-300 transition-colors duration-200"
            >
              Combined
            </a>
            <a 
              href='#card' 
              onClick={(e) => handleSmoothScroll(e, 'card')} 
              className="text-sm text-white hover:text-gray-300 transition-colors duration-200"
            >
              Card
            </a>
            <a 
              href='#video' 
              onClick={(e) => handleSmoothScroll(e, 'video')} 
              className="text-sm text-white hover:text-gray-300 transition-colors duration-200"
            >
              Video
            </a>
            <a 
              href='#image' 
              onClick={(e) => handleSmoothScroll(e, 'image')} 
              className="text-sm text-white hover:text-gray-300 transition-colors duration-200"
            >
              Image
            </a>
            <a 
              href='#promotion' 
              onClick={(e) => handleSmoothScroll(e, 'promotion')} 
              className="text-sm text-white hover:text-gray-300 transition-colors duration-200"
            >
              Promotion
            </a>
          </div>
        </div>
      </div>
      
      <span 
          style={{
            transform: `translateX(${completion - 100}%)`
          }}
          className="absolute bg-gray-500 w-full h-1 bottom-0"
        />
    </header>
  )
}

export default Header