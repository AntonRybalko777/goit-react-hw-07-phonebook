import { Button, Li, Ul } from './ContactList.styled';
import { AiFillDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Ul>
      {filteredContacts.map(contact => (
        <Li key={contact.id}>
          {contact.name} : <b>{contact.phone}</b>
          <Button
            onClick={() => {
              dispatch(deleteContact(contact));
            }}
          >
            <AiFillDelete size={15} />
          </Button>
        </Li>
      ))}
    </Ul>
  );
};
