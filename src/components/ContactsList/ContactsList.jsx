export const ContactListBox = ({ visibleContacts, removeContact }) => {
  return (
    <ul>
      {visibleContacts.map((contact, inx) => (
        <li
          key={contact.id}
          style={{ marginLeft: 30, fontSize: 24, widht: 400 }}
        >
          {contact.name}: {contact.number}
          <button
            type="submit"
            onClick={() => {
              removeContact(inx);
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
