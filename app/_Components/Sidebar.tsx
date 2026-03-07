"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// استيراد كل الأيقونات من Lu لضمان عدم حدوث تعارض
import { 
  LuLayoutDashboard, 
  LuPackage, 
  LuUsers, 
  LuSettings, 
  LuChevronRight, 
  LuMenu, 
  LuX 
} from "react-icons/lu";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Overview", href: "/dashboard", icon: <LuLayoutDashboard size={20} /> },
    { name: "Products", href: "/dashboard/products", icon: <LuPackage size={20} /> },
    { name: "Users", href: "/dashboard/users", icon: <LuUsers size={20} /> },
    { name: "Settings", href: "/dashboard/settings", icon: <LuSettings size={20} /> },
  ];

  return (
    <>
      {/* زر المنيو - باستخدام LuMenu */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed  right-5 z-50 p-2.5 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-600 hover:bg-slate-50 transition-all active:scale-95"
      >
        <LuMenu size={22} />
      </button>

      {/* الـ Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* الـ Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-[70] w-64 bg-[#0F172A] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        md:relative md:translate-x-0 
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="flex flex-col h-full p-5 text-white">
          
          <div className="flex items-center justify-between mb-8 px-2 py-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center font-bold">S</div>
              <span className="text-xl font-bold tracking-tight">Spark.</span>
            </div>
            
            {/* زر الإغلاق - باستخدام LuX */}
            <button onClick={() => setOpen(false)} className="md:hidden text-slate-400 hover:text-white transition">
              <LuX size={24} />
            </button>
          </div>

          <nav className="flex-1 space-y-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-[14px] font-medium transition-all duration-300 ${
                    active ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className={active ? "text-white" : "text-slate-500"}>{link.icon}</span>
                  <span className="flex-1">{link.name}</span>
                  {active && <LuChevronRight size={14} className="opacity-50" />}
                </Link>
              );
            })}
          </nav>

        </div>
      </aside>
    </>
  );
}