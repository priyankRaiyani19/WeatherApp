import React from "react";

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/10 p-4 rounded-2xl text-center flex flex-col items-center space-y-2 shadow-lg backdrop-blur-sm ${className}`}>{children}</div>
  );
}

export default Card;
