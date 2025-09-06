import integralCF from "@/fonts/intergalCf";
import React from "react";

export default function Typography({ children, className = "", ...props }) {
  return (
    <span className={`${integralCF.className} ${className}`} {...props}>
      {children}
    </span>
  );
}
