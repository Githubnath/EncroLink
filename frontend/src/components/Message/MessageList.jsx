import React from 'react';

const MessageList = ({ messages }) => (
  <ul className="mt-4">
    {messages.map((msg, idx) => (
      <li key={idx} className="mb-2 border p-2 rounded">{msg}</li>
    ))}
  </ul>
);

export default MessageList;

