import { useState } from 'react';
import { SimpleComponentReact16 } from '@example-next/simple-component-react-16';
import React from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <SimpleComponentReact16 />
      <Header title="Develop. Preview. Ship. 🚀" />
      <div>React Version - {React.version}</div>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
