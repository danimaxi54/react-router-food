import { useState } from 'react';

export const Search = ({ cb }) => {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          type='search'
          value={value}
          placeholder='Search'
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className='btn'
          style={{ position: 'absolute', top: 0, right: 0 }}
          onClick={() => cb(value)}
        >
          Search
        </button>
      </div>
    </div>
  );
};
