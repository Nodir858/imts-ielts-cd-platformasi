import { useState } from "react"
import Sidebar from "../pages/Sidebar"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Navbar() {

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    
    //React state updates are async.
    //If the function runs multiple times quickly, isSidebarOpen may be outdated.
    const toggleSidebar =() : void => {
        setIsSidebarOpen(prev => !prev);
    }

  return (
    <div className="sticky flex justify-center items-center px-10 py-5 font-semibold bg-gray-100 border-b border-gray-300">
        <div className="flex max-w-7xl w-full ml-auto mr-auto justify-between items-center">
            <div>
                IMTS.uz
            </div>
                <li className="hidden list-none md:flex justify-between w-md">
                    <Link to="/">
                        <ul>Главная</ul>
                    </Link>
                        <ul>Статус</ul>
                        <Link to="/test">
                            <ul>Тесты</ul>
                        </Link>
                        <ul>История</ul>
                        <ul>Рейтинг</ul>
                        <ul>PuzzleHub</ul>
                </li>
            <div className="flex justify-between items-center w-30">
                <span className='text-blue-600'>Войти</span>
                <span className="md:hidden" onClick={toggleSidebar}><GiHamburgerMenu className="h-8 w-8"/></span>
            </div>
        </div>
            <div>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} ></Sidebar>
            </div>
    </div>
  )
}
