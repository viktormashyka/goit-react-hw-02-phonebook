export const FilterBox = ({ filter, changeFilter }) => {
  return (
    <label htmlFor="" style={{ marginLeft: 30, fontSize: 24 }}>
      Find contacts by name
      <br />
      <input
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={changeFilter}
        style={{ marginLeft: 30, fontSize: 24 }}
      />
    </label>
  );
};
