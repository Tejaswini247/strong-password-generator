import React from 'react';

function PasswordOptions({
  length,
  onLengthChange,
  includeUppercase,
  onUppercaseChange,
  includeLowercase,
  onLowercaseChange,
  includeNumbers,
  onNumbersChange,
  includeSymbols,
  onSymbolsChange,
}) {
  return (
    <div className="password-options">
      <label htmlFor="length">Password Length:</label>
      <input
        type="number"
        id="length"
        value={length}
        onChange={(e) => onLengthChange(parseInt(e.target.value))}
        min={8}
        max={32} // Adjust length limits as desired
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => onUppercaseChange(e.target.checked)}
        />
        Include Uppercase Letters
      </label>  {/* Closing label tag here */}
      <br />
      {/* ... other checkboxes for lowercase, numbers, and symbols */}
    </div>
  );
}

export default PasswordOptions;