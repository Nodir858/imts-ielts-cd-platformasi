import { FaIoxhost } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaBrain } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";

export default function Features() {
  return (
    <section className="bg-gray-100 px-8 py-20">
        <div className="max-w-6xl mx-auto ">
            <div className="text-center max-w-3xl mx-auto mb-10">
                <h1 className="text-4xl font-bold mb-4">Почему выбирают систему Inha Mock Test?</h1>
                <p className="mx-auto text-lg text-gray-700">Наша платформа сочетает передовые технологии с проверенными образовательными методами, чтобы помочь вам преуспеть в экзаменах</p>
            </div>
            <div className="grid grid-cols-3 gap-7">
                <div className="bg-white p-7 h-auto space-y-2 rounded-2xl shadow-md">
                    <div className="bg-blue-200 h-15 w-15 flex justify-center items-center rounded-full"><FaIoxhost className="h-8 w-8 text-blue-700"/></div>
                    <h1 className="text-xl">Персонализированное обучение</h1>
                    <p className="w-60 text-gray-700">Рекомендации на основе ИИ, основанные на вашей производительности и моделях обучения.</p>
                </div>
                <div className="bg-white p-7 h-auto space-y-2 rounded-2xl shadow-md">
                    <div className="bg-green-200 h-15 w-15 flex justify-center items-center rounded-full"><MdOutlineAnalytics className="h-8 w-8 text-green-700"/></div>
                    <h1 className="text-xl">Детальная аналитика</h1>
                    <p className="w-60 text-gray-700">Отслеживайте свой прогресс с помощью комплексной аналитики производительности и статистики.</p>
                </div>
                <div className="bg-white p-7 h-auto space-y-2 rounded-2xl shadow-md">
                    <div className="bg-violet-200 h-15 w-15 flex justify-center items-center rounded-full"><FaBrain className="h-8 w-8 text-violet-700"/></div>
                    <h1 className="text-xl">Соревнование с коллегами</h1>
                    <p className="w-60 text-gray-700">Соревнуйтесь с другими студентами в таблицах лидеров и оставайтесь мотивированными.</p>
                </div>
                <div className="bg-white p-7 h-auto space-y-2 rounded-2xl shadow-md">
                    <div className="bg-amber-200 h-15 w-15 flex justify-center items-center rounded-full"><IoBookOutline className="h-8 w-8 text-amber-700"/></div>
                    <h1 className="text-xl">Обширный банк вопросов</h1>
                    <p className="w-60 text-gray-700">Получите доступ к тысячам практических вопросов по различным предметам.</p>
                </div>
                <div className="bg-white p-7 h-auto space-y-2 rounded-2xl shadow-md">
                    <div className="bg-red-200 h-15 w-15 flex justify-center items-center rounded-full"><MdOutlineTimer className="h-8 w-8 text-red-700"/></div>
                    <h1 className="text-xl">Практика в реальном времени</h1>
                    <p className="w-60 text-gray-700">Симулируйте реальные условия экзамена с помощью практических сессий с таймером.</p>
                </div>
                <div className="bg-white p-7 h-auto space-y-2 rounded-2xl shadow-md">
                    <div className="bg-indigo-200 h-15 w-15 flex justify-center items-center rounded-full"><AiOutlineThunderbolt className="h-8 w-8 text-indigo-700"/></div>
                    <h1 className="text-xl">Мгновенная обратная связь</h1>
                    <p className="w-60 text-gray-700">Получайте немедленные результаты и объяснения для каждого вопроса.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
