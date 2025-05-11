import { useRef, useState, useEffect } from 'react';

export const useDraggableTable = (ref: React.RefObject<HTMLElement | null>) => {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isScrollable, setIsScrollable] = useState(false);

  // Function to check if the content is scrollable
  const checkIfScrollable = () => {
    if (ref.current) {
      setIsScrollable(ref.current.scrollWidth > ref.current.clientWidth);
    }
  };

  useEffect(() => {
    // Check initially after the component has rendered
    const onInit = () => {
      window.requestAnimationFrame(checkIfScrollable);
    };

    // Add resize listener to recheck if the table is scrollable on window resize
    const handleResize = () => {
      checkIfScrollable();
    };

    window.addEventListener('resize', handleResize);

    // Use requestAnimationFrame to check after initial render
    onInit();

    // Cleanup event listeners
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);
  useEffect(() => {
    if (isScrollable) {
      ref.current?.classList.add('cursor-grab');
    }
  }, [isScrollable]);

  const mouseDownHandler = (e: React.MouseEvent) => {
    if (!ref.current) return;
    if (!isScrollable) return; // Only allow dragging if scrollable
    isDragging.current = true;
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
    ref.current.classList.add('!grabbing');
    ref.current?.classList.remove('cursor-grab');
    ref.current?.classList.add('cursor-grabbing');
  };

  const mouseMoveHandler = (e: MouseEvent) => {
    if (!isDragging.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const scroll = x - startX.current;
    ref.current.scrollLeft = scrollLeft.current - scroll;
  };

  const mouseUpHandler = () => {
    if (!ref.current) return;
    isDragging.current = false;
    ref.current.classList.remove('!grabbing');
    ref.current?.classList.add('cursor-grab');
    ref.current?.classList.remove('cursor-grabbing');
  };

  const attachListeners = () => {
    if (!ref.current) return;
    ref.current.addEventListener('mousemove', mouseMoveHandler);
    ref.current.addEventListener('mouseup', mouseUpHandler);
    ref.current.addEventListener('mouseleave', mouseUpHandler);
  };

  const detachListeners = () => {
    if (!ref.current) return;
    ref.current.removeEventListener('mousemove', mouseMoveHandler);
    ref.current.removeEventListener('mouseup', mouseUpHandler);
    ref.current.removeEventListener('mouseleave', mouseUpHandler);
  };

  return {
    mouseDownHandler,
    attachListeners,
    detachListeners,
    isScrollable,
  };
};
