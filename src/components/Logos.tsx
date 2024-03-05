import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import { animated, useTransition } from 'react-spring';

export const Logos = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const transition = useTransition(isVisible, { from: {}, enter: {}, leave: {} });
  return (
    <>
      <h1 onClick={() => setIsVisible((v: boolean) => !v)}>Vite + React</h1>
      {isVisible && (
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      )}
      <div className="logo-container">
        {transition((style, item) => item && <animated.div style={style} className="item" />)}
      </div>
    </>
  );
};
