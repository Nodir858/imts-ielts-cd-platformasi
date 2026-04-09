import { IoMdArrowForward } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { LiaUniversitySolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import { GiBookmarklet } from "react-icons/gi";

export default function Banner() {
  return (
    <section className="min-h-100 font-semibold px-10 py-20 bg-sky-100">
          <div className="space-y-10 w-full max-w-6xl mx-auto">
            <div className="space-y-10">
                  <h1 className="text-5xl font-bold text-center">Освойте свои <span className="text-blue-600">Экзамены</span></h1>
                  <p className="text-lg text-center text-gray-700">Присоединяйтесь к тысячам студентов, готовящихся к вступительным экзаменам в университет с помощью нашей платформы пробных тестов с ИИ. Отслеживайте прогресс, соревнуйтесь с коллегами и достигайте своих академических целей.</p>
                  <div className="flex justify-center gap-10">
                      <button className="cursor-pointer flex px-10 py-2 bg-blue-600 rounded-md text-white text-lg">Начать бесплатную пробную версию
                            <span className="flex justify-center items-center">
                              <IoMdArrowForward className="h-5 w-5"/>
                            </span>
                        </button>
                      <button className="cursor-pointer border border-slate-700 flex px-10 py-2 bg-white rounded-md text-slate-700 text-lg">
                            <span className="flex justify-center items-center">
                            <IoPlayOutline className="h-5 w-5"/>Смотреть демо
                            </span>
                        </button>
                  </div>
            </div>
            <div className="space-y-10">
                  <h1 className="text-4xl font-bold text-center">Университет Инха в Ташкенте (УИУ)</h1>
                  <p className="text-center text-lg text-gray-700 ">Университет Инха в Ташкенте (УИУ) был основан в 2014 году.
                    университет был создан в сотрудничестве с университетом Инха:
                    в Республике Корея. В настоящее время в нашем университете обучается около 2000
                    студентов.
                  </p>
                  <div className="flex gap-3">
                      <div className="border-2 border-sky-500 rounded-md p-3 h-38 w-sm text-sky-800">
                          <div className="flex justify-center items-center border-b-2 ">
                              <h1 className="text-2xl">Приём в бакалавриат</h1>
                              <span className=""><LiaUniversitySolid className="h-12 w-12"/></span>
                          </div>
                          <div className="mt-2 text-lg">
                              <p>Узнать болше</p>
                          </div>
                      </div>
                      <div className="border-2 rounded-md p-3 h-38 w-sm border-sky-500 text-sky-800">
                          <div className="flex justify-center items-center border-b-2">
                              <h1 className="text-2xl">Приём в аспирантуру</h1>
                              <span className="flex justify-center items-center"><PiStudent className="h-12 w-12" /></span>
                          </div>
                          <div className="mt-2 text-lg">
                              <p>Узнать болше</p>
                          </div>
                      </div>
                      <div className="h-38 border-2 rounded-md p-3 w-sm border-sky-500 text-sky-800">
                          <div className="flex justify-center items-center border-b-2">
                              <h1 className="text-2xl w-70">Центр непрерывного образования (ЦНО)</h1>
                              <span className="flex justify-center items-center"><GiBookmarklet className="h-12 w-12"/></span>
                          </div>
                          <div className="mt-2 text-lg">
                              <p>Узнать болше</p>
                          </div>
                      </div>
                  </div>
            </div>
          </div>
    </section>
  )
}
