import React, { useState, useRef } from 'react';
import reactLogo from '../assets/react.svg';

interface TeamMember {
  name: string;
  position: string;
  email: string;
}

export const Credits: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const team: TeamMember[] = [
    { name: 'Alice Smith', position: 'Product owner', email: 'alice@example.xd' },
    { name: 'Bob Johnson', position: 'System Administrator', email: 'bob100@tester.com' },
    { name: 'Charlie Brown', position: 'Designer', email: 'alice@example.xd' },
    { name: 'Daisy Miller', position: 'Back-end Team leader', email: 'da@example.xd' },
    { name: 'Edward Davis', position: 'Back-end Developer', email: 'edward4321@example.xd' },
    { name: 'Frank Wilson', position: 'Back-end Developer', email: 'frank@example.xd' },
    { name: 'Grace Lee', position: 'Front-end Team leader', email: 'grace@example.xd' },
    { name: 'Henry Taylor', position: 'Front-end Developer', email: 'asd@example.xd' },
    { name: 'Ivy Anderson', position: 'Front-end Developer', email: 'ivyivy@example.xd' },
    { name: 'Jack White', position: 'Front-end Developer', email: 'sparrow@example.xd' },
    { name: 'John Wick', position: 'Front-end Developer', email: 'john@example.xd' },
    { name: 'Marty McFly', position: 'Front-end Developer', email: '' },
    { name: 'Emmett Brown', position: 'Doctor', email: '' },
    { name: 'Thomas A. Anderson', position: 'Matrix Hacker', email: '' },
  ];

  const handleEmailClick = (email: string) => {
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="credits">
      <div className="credits-rain">
        <div className={`credits-container ${isPaused ? 'paused' : ''}`} ref={containerRef}>
          <img src={reactLogo} className="credits-logo" alt="Logo" />
          <div className="credits-created-by">CREDITS CREATED BY</div>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="credits-team"
            onClick={() => handleEmailClick('xmnuc@o2.pl')}
          >
            JAKUB DZIĘCIOŁOWSKI - xmNuc on github
          </div>
          <div>Test imaginary characters:</div>
          {team.map(({ name, position, email }, index) => (
            <div
              key={index}
              className="credits-teammates"
              onClick={() => handleEmailClick(email)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleEmailClick(email);
                }
              }}
            >
              <span className="credits-position">{position}</span>
              <span className="credits-name"> {name}</span>
            </div>
          ))}
          <img src={reactLogo} className="credits-logo" alt="Logo" />
        </div>
        <div className="rain-effect">
          {[...Array(50)].map((_, index) => (
            <div key={index} className="rain-drop"></div>
          ))}
        </div>
      </div>
    </div>
  );
};
