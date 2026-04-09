//Type definitions are local to the file unless you export them
//This type only exists in Navbar.tsx.
//Sidebar.tsx cannot automatically see NavbarProps unless you export it and import it.
import { AiOutlineClose } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

type NavbarProps = {
    isSidebarOpen: boolean
    toggleSidebar: () => void
}

export default function Sidebar({isSidebarOpen, toggleSidebar} : NavbarProps) {
  return (
    <div className="relative">
        <div style={{
            transform: `translateX(${isSidebarOpen ? "0%" : "100%"})`,
        }}
        className="fixed top-0 right-0 h-full min-w-xs rounded-l-4xl bg-white duration-300 transition-transform shadow-2xl">
            
            <div className="flex justify-between rounded-t-4xl text-white p-2 bg-sky-100 rounded top-4 right-4" >
            <span  className="bg-sky-500 h-12 w-12 flex justify-center items-center rounded-3xl">
                    <FaRegUserCircle className="h-10 w-10"/>
            </span>
            
            <span className="bg-red-500 h-12 w-12 flex justify-center items-center rounded-full">
                    <AiOutlineClose className="h-10 w-10"  onClick={toggleSidebar}/>
                </span>
            </div>
            <div className="p-5">
                <li className="list-none flex flex-col">
                                <ul className="px-1 py-3 hover:bg-blue-100 rounded-3xl cursor-pointer transition duration-300 ">Главная</ul>
                                <ul className="px-1 py-3 hover:bg-blue-100 rounded-3xl cursor-pointer transition duration-300 ">Статус</ul>
                                <ul className="px-1 py-3 hover:bg-blue-100 rounded-3xl cursor-pointer transition duration-300 ">Тесты</ul>
                                <ul className="px-1 py-3 hover:bg-blue-100 rounded-3xl cursor-pointer transition duration-300 ">История</ul>
                                <ul className="px-1 py-3 hover:bg-blue-100 rounded-3xl cursor-pointer transition duration-300 ">Рейтинг</ul>
                                <ul className="px-1 py-3 hover:bg-blue-100 rounded-3xl cursor-pointer transition duration-300 ">PuzzleHub</ul>
                </li>
            </div>
            <div className="px-5 text-center">
                <button className=' border-blue-700 text-blue-700 border h-10 w-full rounded-3xl p-2'>Войти</button>
            </div>
        </div>
    </div>
  )
}
