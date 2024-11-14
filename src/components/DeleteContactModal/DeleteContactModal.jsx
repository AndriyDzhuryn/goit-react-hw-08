import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import toast, { Toaster } from 'react-hot-toast';

import { deleteContact } from '../../redux/contacts/operations.js';

import css from './DeleteContactModal.module.css';

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

const DeleteContactModal = ({
  isOpenDelete,
  closeModalDelete,
  modalContact,
}) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
    closeModalDelete();
    toast.success('Contact deleted successfully!');
  };

  const id = modalContact.id;

  const handleCancel = () => {
    closeModalDelete();
    toast.success('Cancelled!');
  };

  return (
    <div className={css.modalWrapper}>
      <Modal
        isOpen={isOpenDelete}
        onRequestClose={closeModalDelete}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p>Do you want to delete this contact?</p>
        <div className={css.btnWrapper}>
          <button
            className={css.btnDelete}
            type="submit"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
          <button
            className={css.btnCancel}
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>

        <Toaster />
      </Modal>
    </div>
  );
};

export default DeleteContactModal;
