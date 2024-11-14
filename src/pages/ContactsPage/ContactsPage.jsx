import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Circles } from 'react-loader-spinner';

import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import EditContactModal from '../../components/EditContactModal/EditContactModal.jsx';
import DeleteContactModal from '../../components/DeleteContactModal/DeleteContactModal.jsx';

import { selectError, selectLoading } from '../../redux/auth/selectors.js';
import { fetchContacts } from '../../redux/contacts/operations.js';

import css from '../ContactsPage/ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [modalContact, setModalContact] = useState({
    name: '',
    number: '',
    id: '',
  });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function openModalEdit() {
    setIsOpenEdit(true);
  }

  function closeModalEdit() {
    setIsOpenEdit(false);
  }

  function openModalDelete() {
    setIsOpenDelete(true);
  }

  function closeModalDelete() {
    setIsOpenDelete(false);
  }

  const onModalContact = (name, number, id) => {
    setModalContact({
      ...modalContact,
      name: name,
      number: number,
      id: id,
    });
  };

  return (
    <div className={css.contactsWrapper}>
      <div className={css.titleWrapper}>
        <h1 className={css.title}>Phonebook</h1>
      </div>

      <ContactForm />
      <SearchBox />
      {isLoading && !error && (
        <div className={css.loaderWrapper}>
          <Circles
            height="80"
            width="80"
            color="#0000ff"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      {error && (
        <p className={css.error}>
          Whoops, something went wrong! Please try reloading this page! <br />
          <span>{error}</span>
        </p>
      )}
      <ContactList
        onModalContact={onModalContact}
        openModalEdit={openModalEdit}
        openModalDelete={openModalDelete}
      />
      <EditContactModal
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        modalContact={modalContact}
      />

      <DeleteContactModal
        isOpenDelete={isOpenDelete}
        closeModalDelete={closeModalDelete}
        modalContact={modalContact}
      />
    </div>
  );
};

export default ContactsPage;
