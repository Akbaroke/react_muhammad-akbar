import { useEffect, useRef } from 'react';

function useScrollToBottom() {
  const viewport = useRef(null);

  useEffect(() => {
    viewport?.current?.scrollTo({
      top: viewport.current.scrollHeight,
      behavior: 'smooth',
    });
  }, []);

  return viewport;
}

export default useScrollToBottom;
