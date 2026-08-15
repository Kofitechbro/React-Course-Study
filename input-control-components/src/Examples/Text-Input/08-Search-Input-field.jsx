import { useState } from 'react';

export function SearchInputField() {
  const [search, setSearch] = useState('');

  const names = ['Emmanuel', 'Kofi', 'Kwame', 'Akosua'];

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <section className="input-container">
      <h3 className="input-title">Search Input</h3>

      <div>
        <input
          type="text"
          //   name="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search names..."
          autoComplete="off"
        />
      </div>

      <ul>
        {filteredNames.length > 0 ? (
          filteredNames.map((name) => (
            <li className="text" key={name}>
              {name}
            </li>
          ))
        ) : (
          <li className="text">No name found...</li>
        )}
      </ul>
    </section>
  );
}
