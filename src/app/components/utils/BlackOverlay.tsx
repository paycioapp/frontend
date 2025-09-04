"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface BlackOverlayProps {
  show: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;    
}

const BlackOverlay: React.FC<BlackOverlayProps> = ({ show, onClick, onMouseEnter }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 top-24 bg-black/50 z-50 transition-opacity"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    />,
    document.body
  );
};

export default BlackOverlay;
