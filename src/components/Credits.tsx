import reactLogo from '../assets/react.svg';

export const Credits = () => {
  const team = [
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
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="credits">
      <div className="credits-rain">
        <div className="credits-container">
          <img src={reactLogo} className="credits-logo" alt="Logo" />
          <div className="credits-created-by">CREATED BY</div>
          <div className="credits-team" onClick={() => handleEmailClick('ourTeam@example.xd')}>
            OUR TEAM
          </div>
          {team.map(({ name, position, email }, index) => (
            <div
              key={index}
              className="credits-teammates"
              onClick={() => {
                handleEmailClick(email);
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
