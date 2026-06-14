import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <p className="header-badge">React homework</p>
        <h1>People Cards</h1>
        <p className="header-subtitle">
          Небольшое приложение с карточками людей, выложенными плиткой
        </p>

        <div className="header-tags">
          <span>6 карточек</span>
          <span>CSS Grid</span>
          <span>React components</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
