import Navbar from "../_Components/Navbar";
import Sidebar from "../_Components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
})  {
  return (
    <div className="flex min-h-screen bg-slate-800">

      <Sidebar />

      <div className="flex-1 flex flex-col">
       <Navbar />

<main className="w-full p-3 md:p-6">
          {children}
        </main>
      </div>

    </div>
  );
}