import Cookies from "js-cookie";
import SidebarLayout from "@/shared/SidebarLayout/SidebarLayout";
export default function Home() {
    return (
        <SidebarLayout>
            <div>
                <div className="px-2">
                    <div>
                        <h1 className="text-2xl py-4">
                            Clothing models
                        </h1>
                    </div>

                    <div className="">
                        <input type="text"/>
                        <input type="text"/>
                        <a href="#">Добавить</a>
                    </div>
                    <div className="mt-4">
                        <ul>
                            <li className="flex justify-between items-center">
                                <div>
                                    <h2>
                                        <a href="#">Clothing model 1</a>
                                    </h2>
                                    <p>CODE of MODEL</p>
                                </div>
                                <div>
                                    <a href="#">Открыть модель</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </SidebarLayout>
    )
}