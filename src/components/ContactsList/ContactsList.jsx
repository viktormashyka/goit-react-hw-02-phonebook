import React from 'react';

export const ContactListBox = ({ visibleContacts, onRemoveContact }) => {
  return (
    <ul>
      {visibleContacts.map(contact => (
        <li
          key={contact.id}
          style={{ marginLeft: 30, fontSize: 24, widht: 400 }}
        >
          {contact.name}: {contact.number}
          <button
            type="submit"
            onClick={() => {
              onRemoveContact(contact.id);
            }}
            style={{ marginLeft: 30, fontSize: 16 }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
