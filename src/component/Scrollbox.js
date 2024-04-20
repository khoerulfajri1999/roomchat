import React, { useRef, useEffect } from "react";
import "../styles/Scrollbox.css";

function ScrollBox({ children }) {
  const scrollBoxRef = useRef(null);

  // Fungsi untuk men-scroll ke bawah
  const scrollToBottom = () => {
    if (scrollBoxRef.current) {
      scrollBoxRef.current.scrollTop = scrollBoxRef.current.scrollHeight;
    }
  };

  // Fungsi yang dipanggil setiap kali children berubah
  useEffect(() => {
    scrollToBottom(); // Panggil fungsi untuk men-scroll ke bawah
  }, [children]);

  return (
    <div ref={scrollBoxRef} className="scroll">
      {children}
    </div>
  );
}

export default ScrollBox;
