import { useEffect } from "react";

const useOutsideClick = (ref,ref2, callback) => {
  const handleClick = e => {
    if ((ref.current && !ref.current.contains(e.target)) && (ref2.current && !ref2.current.contains(e.target))  ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseover", handleClick);

    return () => {
      document.removeEventListener("mouseover", handleClick);
    };
  });
};

export default useOutsideClick;