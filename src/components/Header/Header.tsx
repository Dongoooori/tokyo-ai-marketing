import classNames from "classnames";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/MenuRounded';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // 헤더 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={classNames(
        'fixed top-0 w-full z-50 transition-all duration-500 ease-in-out py-4',
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="w-full flex items-center px-4">
        {/* 왼쪽: 메뉴 */}
        <button className="text-sm flex justify-start">
          <MenuIcon 
            sx={{
              color: isScrolled ? undefined : "white"
            }}
          />
        </button>

        {/* 가운데: 로고 */}
        <div className={classNames("text-xl font-bold tracking-wider flex justify-center w-full", isScrolled ? "text-black" : "text-white")}>
          BRAND UP
        </div>

        {/* 오른쪽: 설정 */}
        {/* <button className={classNames("px-3 py-1 rounded-md text-sm", isScrolled ? "text-black" : "text-white")}>
          Configure
        </button> */}
      </div>
    </header>
  )
}

export default Header