import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius, customClass, shadowSize, id, onPress }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-${shadowSize} ${customClass}`}
    >
      {text}
    </button>
  );
};

export default Button;
