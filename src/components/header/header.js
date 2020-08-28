import React from 'react';

import './header.scss';

const Header = () => {
  const categoriesData = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

  return (
    <header className="header">
      <div className="header-wrapper">
        <h1 className="logo">Song<span>bird</span></h1>
        <div className="score">
          Счет: <span>0</span>
        </div>
      </div>

      <ul className="category-list">
        {categoriesData.map((category) =>
          <li
            key={category}
            className="category-list__item">
            {category}
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
