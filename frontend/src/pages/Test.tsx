
import { Link } from "react-router-dom"
import Inha from "../universities/Inha"

export default function Test() {
  return (
    <section className="bg-gray-100 h-screen">
      <div className=" max-w-7xl mx-auto px-5 py-10 ">
        <h1 className="text-3xl font-semibold mb-5">Доступные тесты</h1>
        <div className="bg-white py-5 px-5 rounded-2xl">
                    <h1 className="text-2xl font-semibold border-b border-gray-300 mb-5 pb-5">Выберите ваш университет</h1>
                {/* <Inha></Inha> */}
                    <Link to="/inha">
                        <button className="bg-blue-600 w-50 h-20 rounded-lg font-semibold text-2xl cursor-pointer">Inha</button>
                    </Link>
        </div>
      </div>
    </section>
  )
}
