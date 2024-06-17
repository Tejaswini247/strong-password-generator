import React, { useState } from 'react';
import PasswordOptions from './PasswordOptions';
import GeneratedPassword from './GeneratedPassword';

function App() {
  const [passwordLength, setPasswordLength] = useState(12); // Initial password length
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    let characterSet = '';
    if (includeUppercase) characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) characterSet += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characterSet += '0123456789';
    if (includeSymbols) characterSet += '!@#$%^&*()-=+{};:,<.>/?';

    if (!characterSet) {
      alert('Please select at least one character type!');
      return; // Prevent password generation if no characters selected
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    setGeneratedPassword(password);
  };

  return (
    <div className="App">
      <h1>Strong Password Generator</h1>
      <PasswordOptions
        length={passwordLength}
        onLengthChange={(length) => setPasswordLength(length)}
        includeUppercase={includeUppercase}
        onUppercaseChange={(checked) => setIncludeUppercase(checked)}
        includeLowercase={includeLowercase}
        onLowercaseChange={(checked) => setIncludeLowercase(checked)}
        includeNumbers={includeNumbers}
        onNumbersChange={(checked) => setIncludeNumbers(checked)}
        includeSymbols={includeSymbols}
        onSymbolsChange={(checked) => setIncludeSymbols(checked)}
      />
      <button onClick={generatePassword}>Generate Password</button>
      <GeneratedPassword password={generatedPassword} />
    </div>
  );
}

export default App;