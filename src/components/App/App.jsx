import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, Span, ErrorMsg } from './App.styled';
import { selectItems, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      {error && (
        <ErrorMsg>
          Whoops! Something went wrong. Please try to reload the page.
        </ErrorMsg>
      )}
      {items.length > 0 ? <Filter /> : <Span>Contact list is empty</Span>}
      <ContactList />
    </Container>
  );
};
