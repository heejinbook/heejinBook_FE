import { useEffect, useRef, useState } from 'react';

export function useOutsideClick(initialVisibility: boolean) {
  const [visible, setVisible] = useState<boolean>(initialVisibility);
  const ref = useRef<HTMLDivElement>(null);

  const clickOutsideHandler = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event?.target as Node)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickOutsideHandler, true);
    return () => {
      document.removeEventListener('click', clickOutsideHandler, true);
    };
  }, []);

  return { ref, visible, setVisible };
}
