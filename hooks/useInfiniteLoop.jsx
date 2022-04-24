import React, { useEffect, useState } from 'react';

const useInfiniteLoop = (list, delay) => {
  const [ index, setIndex ] = useState(0)

  useEffect(() => { 
    setTimeout(() => {
      if (index === list.length - 1) {
        setIndex(0)
      } else {
        setIndex((currentIndex) => currentIndex + 1)
      }
    }, delay)
  }, [index])

  return list[index];
}

export default useInfiniteLoop;
