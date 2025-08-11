import classNames from "classnames";
import MenuIcon from '@mui/icons-material/MenuRounded';
import useScroll from "../../hooks/useScroll";

const Header: React.FC = () => {
  const { completion, isScrolled } = useScroll();

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