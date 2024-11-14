import Modal from 'react-modal';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { editContact } from '../../redux/contacts/operations.js';

import css from './EditContactModal.module.css';

const customStyles = {
  content: {
    marginTop: '30px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const EditContactModal = ({ isOpenEdit, closeModalEdit, modalContact }) => {
  const dispatch = useDispatch();

  const id = modalContact.id;

  const edit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const formData = { updateUser: { name, number }, id };
    dispatch(editContact(formData));
    closeModalEdit();
    toast.success('Contact edited successfully!');
  };

  return (
    <div className={css.modalBox}>
      <Modal
        isOpen={isOpenEdit}
        onRequestClose={closeModalEdit}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form id="formContact" onSubmit={edit} className={css.formAddContact}>
          <label className={css.inputDataContacts}>
            <span>Name</span>
            <input
              className={css.inputNameContacts}
              type="text"
              name="name"
              placeholder="Enter your name!"
              minLength={3}
              required
            />
          </label>

          <label className={css.inputDataContacts}>
            <span>Number</span>
            <input
              className={css.inputNumberContacts}
              type="text"
              name="number"
              placeholder="Enter your email!"
              minLength={7}
              maxLength={13}
              required
            />
          </label>
          <button type="submit" className={css.btnAddContact}>
            Edit
          </button>
          <Toaster />
        </form>
      </Modal>
    </div>
  );
};

export default EditContactModal;
