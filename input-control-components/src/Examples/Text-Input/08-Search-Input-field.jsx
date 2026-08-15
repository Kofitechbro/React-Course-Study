import { useState } from 'react';

export function SearchInputField() {
  const [search, setSearch] = useState('');

  const names = ['Emmanuel', 'Kofi', 'Kwame', 'Akosua'];

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="input-container">
      <h3 className="input-title">Search Input</h3>

      <div>
        <input
          type="text"
          //   name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search names..."
        />
      </div>

      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
