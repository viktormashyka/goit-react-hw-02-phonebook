import { Phonebook } from '../components/Phonebook/Phonebook';

export const App = () => {
  return (
    <div>
      <Phonebook onSubmit={values => console.log('values, ', values)} />
    </div>
  );
};
