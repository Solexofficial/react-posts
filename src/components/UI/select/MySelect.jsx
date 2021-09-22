import React from 'react';

const MySelect = ({ option, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
      <option value='' disabled>
        {defaultValue}
      </option>
      {option.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
