import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="people-logo" aria-hidden="true">👥</div>
      <h1>People</h1>
      <p>The cards of people in a tile layout</p>
      <div className="header-buttons">
        <a href="#cards" className="header-button primary">People</a>
        <a href="https://github.com/Sergey2313-arch/People" className="header-button secondary">GitHub</a>
      </div>
    </header>
  );
}

export default Header;
