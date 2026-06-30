function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-slate-900 rounded-xl p-5 shadow-md border border-slate-800 hover:border-blue-500 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <h2 className="text-3xl font-bold mt-2 text-white">
            {value}
          </h2>
        </div>

        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;
