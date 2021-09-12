import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    function handleOutsideClick () {
      if (ref?.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    };
  }, [ref])
}

export default useOutsideClick;
