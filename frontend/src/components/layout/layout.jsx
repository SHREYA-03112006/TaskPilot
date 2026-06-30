import Navbar from "./navbar";
import Sidebar from "./sidebar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
}

export default Layout;