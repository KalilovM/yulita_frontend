import React from "react";
import Link from "next/link";

function SidebarLayout({children}: {children:React.ReactNode}) {
    return (
        <div className="grid grid-cols-5 min-h-screen">
            <div className="col-span-1 p-4 fixed w-1/5 h-screen flex justify-center items-center">
                <ul>
                    <li className="p-2"><Link href="#" className="w-full">Clothing models</Link></li>
                    <li className="p-2"><Link href="#" className="w-full">Stock</Link></li>
                    <li className="p-2"><Link href="#" className="w-full">Operations</Link></li>
                </ul>
            </div>
            <div className="col-start-2 col-end-6">
                {children}
            </div>
        </div>
    );
}

export default SidebarLayout;