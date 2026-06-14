import './People.css';

const people = [
  {
    id: 1,
    name: 'Иван Петров',
    role: 'Frontend-разработчик',
    city: 'Москва',
    initials: 'ИП',
    description: 'Делает интерфейсы на React и любит аккуратную верстку.',
  },
  {
    id: 2,
    name: 'Мария Смирнова',
    role: 'UI/UX дизайнер',
    city: 'Санкт-Петербург',
    initials: 'МС',
    description: 'Создает удобный дизайн и продумывает пользовательский опыт.',
  },
  {
    id: 3,
    name: 'Алексей Иванов',
    role: 'Backend-разработчик',
    city: 'Казань',
    initials: 'АИ',
    description: 'Работает с API, базами данных и серверной логикой.',
  },
  {
    id: 4,
    name: 'Екатерина Волкова',
    role: 'Project Manager',
    city: 'Ростов-на-Дону',
    initials: 'ЕВ',
    description: 'Следит за задачами команды и помогает сдавать проекты вовремя.',
  },
  {
    id: 5,
    name: 'Дмитрий Орлов',
    role: 'QA-инженер',
    city: 'Воронеж',
    initials: 'ДО',
    description: 'Проверяет приложения, ищет ошибки и пишет тест-кейсы.',
  },
  {
    id: 6,
    name: 'Сергей Коробков',
    role: 'Junior Fullstack Developer',
    city: 'Волгодонск',
    initials: 'СК',
    description: 'Изучает React, ASP.NET и собирает портфолио на GitHub.',
  },
];

function People() {
  return (
    <main className="people-page">
      <section className="people-grid">
        {people.map((person) => (
          <div className="person-card" key={person.id}>
            <div className="person-avatar" aria-label={person.name}>
              {person.initials}
            </div>
            <div className="person-info">
              <h2>{person.name}</h2>
              <p className="person-role">{person.role}</p>
              <p className="person-city">Город: {person.city}</p>
              <p className="person-description">{person.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default People;
