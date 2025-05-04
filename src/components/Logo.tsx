import React from "react";
import { useNavigate } from "react-router-dom";

export const Logo: React.FC = () => {
  const navigate = useNavigate();
  const hamdelClick = () => navigate("/");
  return (
    <p
      onClick={hamdelClick}
      className="text-3xl cursor-pointer font-bold text-blue-500 tracking-wide"
    >
      E<span className="text-pink-500">W</span>A
    </p>
  );
};
