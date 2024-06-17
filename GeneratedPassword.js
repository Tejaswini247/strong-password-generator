import React, { useState } from 'react';

function GeneratedPassword({ password }) {
  const [copied, setCopied] = useState(false); // Track copy status

  const copyPassword = () => {
    navigator.clipboard.writeText(password); // Copy password to clipboard
    setCopied(true); // Set copied state for temporary feedback
  };

  return (
    <div className="generated-password">
      {password ? ( /* Check if password exists */
        <div>
          <p>Your Generated Password:</p>
          <input type="text" value={password} readOnly />
          <button onClick={copyPassword}>
            {copied ? 'Copied!' : 'Copy Password'}
          </button>
        </div>
      ) : (
        <p>Click "Generate Password" to create a strong password.</p>
      )}
    </div>
  );
}

export default GeneratedPassword;