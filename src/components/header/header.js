import React from 'react';

import './header.scss';

const Header = ({ level, score }) => {
  const categoriesData = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

  return (
    <header className="header">
      <div className="header-wrapper">
        <h1 className="logo">Song<span>bird</span></h1>
        <div className="score">
          Счет: <span>{score}</span>
        </div>
      </div>

      <ul className="category-list">
        {categoriesData.map((category, index) =>
          <li
            key={category}
            className={(index === level)
              ? "category-list__item  category-list__item--active"
              : "category-list__item"}>
            {category}
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
