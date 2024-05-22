import React from "react";

const Lazyload = () => {
  return (
    <div className="relative flex w-96 animate-pulse gap-2 p-4">
      <div className="flex-1">
        <div className="mb-1 h-20 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
        <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
      </div>
    </div>
  );
};

export default Lazyload;
