import reactLogo from '../assets/react.svg';

export const Credits = () => {
  const names = [
    'Alice Smith',
    'Bob Johnson',
    'Charlie Brown',
    'Daisy Miller',
    'Edward Davis',
    'Frank Wilson',
    'Grace Lee',
    'Henry Taylor',
    'Ivy Anderson',
    'Jack White',
    'Katie Martinez',
    'Leo Harris',
  ];

  return (
    <div className="credits">
      <div className="credits-rain">
        <div className="credits-container">
          <img src={reactLogo} className="logo react" alt="React logo" />
          {names.map((name, index) => (
            <div key={index} className="credits-row">
              <span className="credits-char">{name}</span>
            </div>
          ))}
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
