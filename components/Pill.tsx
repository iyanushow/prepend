import React from "react";

const Pill = ({ children }) => {
  return (
    <button className="px-3 py-1 rounded  text-xs font-medium border border-main hover:bg-amber-400">
      {children}
    </button>
  );
};

export default Pill;
