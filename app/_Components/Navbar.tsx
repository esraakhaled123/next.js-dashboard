"use client";
import { LuBell, LuSearch } from "react-icons/lu";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
      
      {/* اللوجو موجود دايماً */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-bold text-slate-800">
          Dashboard
        </h1>
      </div>

      {/* الجزء اليمين: 
          - flex: يظهر في الموبايل
          - md:hidden: يختفي في المقاسات المتوسطة (Tablet)
          - lg:flex: يرجع يظهر تاني في الديسك توب (الشاشات الكبيرة)
      */}
      <div className="flex md:hidden lg:flex items-center gap-2 sm:gap-5">
        
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
          <LuSearch size={20} />
        </button>

        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
          <LuBell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-2 group cursor-pointer">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-sm font-bold text-slate-700 leading-none">Esraa khaled</span>
            <span className="text-[11px] text-slate-400 mt-1">Super Admin</span>
          </div>
          
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              ES
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}