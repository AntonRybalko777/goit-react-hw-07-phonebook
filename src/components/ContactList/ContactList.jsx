import Notiflix from 'notiflix';
import { Button, Li, Ul } from './ContactList.styled';
import { AiFillDelete } from 'react-icons/ai';
import { useSelector } from 'react-redux';
// import { deleteContact } from 'redux/ContactsSlice';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

export const ContactList = () => {
  const { items } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  // const dispatch = useDispatch();

  return (
    <Ul>
      {filteredContacts.map(contact => (
        <Li key={contact.id}>
          {contact.name} : {contact.phone}
          <Button
            onClick={() => {
              Notiflix.Notify.info(
                `${contact.name} has been removed from the contacts`
              );
              // dispatch(deleteContact(contact.id));
            }}
          >
            <AiFillDelete size={15} />
          </Button>
        </Li>
      ))}
    </Ul>
  );
};
