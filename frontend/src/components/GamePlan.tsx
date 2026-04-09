import { IoMdArrowForward } from "react-icons/io";

export default function GamePlan() {
  return (
    <div className="bg-white ">
        <div className="max-w-6xl mx-auto space-y-15 py-20">
            <div className="text-center">
                <h1 className="text-4xl">Готовы начать свой путь?</h1>
                <p className="text-lg text-gray-700 w-2/3 mx-auto">Присоединяйтесь к тысячам студентов, которые уже улучшают свои баллы с помощью нашей комплексной системы пробных тестов.</p>
            </div>
            <div className="flex justify-center items-center gap-10 text-center">
                <div className="flex flex-col justify-center items-center">
                    <div className="font-bold h-20 w-20 bg-amber-300 flex justify-center items-center text-2xl rounded-full text-white">1</div>
                    <h1 className="text-2xl mb-3">Создать аккаунт</h1>
                    <p className="text-gray-700">Зарегистрируйтесь бесплатно и настройте профиль менее чем за 2 минуты.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="font-bold h-20 w-20 bg-green-400 flex justify-center items-center text-2xl rounded-full text-white">2</div>
                    <h1 className="text-2xl  mb-3">Выберите тест</h1>
                    <p className="text-gray-700">Выберите из сотен практических тестов по различным предметам.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="font-bold h-20 w-20 bg-indigo-400 flex justify-center items-center text-2xl rounded-full text-white">3</div>
                    <h1 className="text-2xl  mb-3">Практикуйтесь и улучшайтесь</h1>
                    <p className="text-gray-700">Проходите тесты, просматривайте результаты и отслеживайте свой прогресс.</p>
                </div>
            </div>
        </div>
        <div className="bg-violet-600 py-20 h-auto text-white">
            <div className="flex flex-col justify-center items-center space-y-5">
                <h1 className="text-4xl font-bold">Готовы начать свой путь?</h1>
                <p className="w-3/7 text-center text-lg">Присоединяйтесь к тысячам студентов, которые 
                    уже улучшают свои баллы с помощью нашей комплексной системы пробных тестов.
                </p>
                <button className="bg-white flex px-10 py-3 rounded-lg gap-3 text-blue-600">Начать первый тест <span className="flex justify-center items-center"><IoMdArrowForward className="h-5 w-5"/></span></button>
            </div>
        </div>
    </div>
  )
}
