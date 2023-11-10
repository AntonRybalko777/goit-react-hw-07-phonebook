import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, Span } from './App.styled';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Loading...</b>}
      {error && (
        <p>Whoops! Something went wrong. Please try to reload the page.</p>
      )}
      {items.length > 0 ? <Filter /> : <Span>Contact list is empty</Span>}
      <ContactList />
    </Container>
  );
};
