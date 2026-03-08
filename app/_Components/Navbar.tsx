"use client";
import Link from "next/link";
import { LuBell, LuSearch } from "react-icons/lu";

export default function Navbar() {
  return (

    <nav className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 h-16 sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
      
      <div className="flex items-center gap-4">

       <Link href="/dashboard">
        <h1 className="text-lg font-bold text-white tracking-wide">
          Dashboard
        </h1>
       </Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-5">
        

        <button className="p-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-full transition-all">
          <LuSearch size={20} />
        </button>

        <button className="p-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-full transition-all relative">
          <LuBell size={20} />


          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-slate-900"></span>
        </button>

        <div className="h-6 w-[1px] bg-slate-800 mx-2 hidden lg:block"></div>

        <div className="flex items-center gap-3 pl-2 group cursor-pointer">
          <div className="hidden lg:flex flex-col items-end">

            <span className="text-sm font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors">
              Esraa Khaled
            </span>
            <span className="text-[11px] text-slate-500 font-medium tracking-wider">
              SUPER ADMIN
            </span>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg ring-2 ring-slate-800 group-hover:ring-indigo-500/50 transition-all">
              EK
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}