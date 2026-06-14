import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="people-logo" aria-hidden="true">
        <svg viewBox="-55 -55 110 110" role="img">
          <ellipse cx="0" cy="0" rx="42" ry="16" fill="none" stroke="currentColor" strokeWidth="5" />
          <ellipse cx="0" cy="0" rx="42" ry="16" fill="none" stroke="currentColor" strokeWidth="5" transform="rotate(60)" />
          <ellipse cx="0" cy="0" rx="42" ry="16" fill="none" stroke="currentColor" strokeWidth="5" transform="rotate(120)" />
          <circle cx="0" cy="0" r="7" fill="currentColor" />
        </svg>
      </div>
      <h1>People</h1>
      <p>The cards of people in a tile layout</p>
      <div className="header-buttons">
        <a href="#cards" className="header-button primary">People</a>
      </div>
    </header>
  );
}

export default Header;
