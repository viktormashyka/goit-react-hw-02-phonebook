export const ContactListBox = ({ visibleContacts, removeContact }) => {
  return (
    <ul>
      {visibleContacts.map((contact, inx) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="submit"
            onClick={() => {
              removeContact(inx);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
