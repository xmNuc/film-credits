import { useEffect, useState, useRef } from 'react';
import './VerticalList.scss';

const VerticalList = () => {
  const items = Array.from({ length: 100 }).map((_, index) => `Element ${index + 1}`);
  const [columns, setColumns] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newColumns = Math.floor(containerWidth / 200);
        setColumns(newColumns || 1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const itemsPerColumn = Math.ceil(items.length / columns);

  return (
    <div
      ref={containerRef}
      className="vertical-list"
      style={{ gridTemplateColumns: `repeat(${columns}, 200px)` }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="list-item"
          style={{
            gridColumn: Math.floor(index / itemsPerColumn) + 1,
            gridRow: (index % itemsPerColumn) + 1,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default VerticalList;
