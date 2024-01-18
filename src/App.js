import { useEffect, useRef } from "react";

export default function OutsideAlerter() {
  const clickMeDivRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(clickMeDivRef.current);
      if (!clickMeDivRef?.current?.contains(event.target)) {
        alert("Benim dışımda tıkladın!");
      }
    }; // Olay dinleyicisini bağla

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Temizleme sırasında olay dinleyicisinin bağlantısını kaldırın

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickMeDivRef]);

  return <div ref={clickMeDivRef}>Tıklayın</div>;
}
