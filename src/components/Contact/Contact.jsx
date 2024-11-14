import css from './Contact.module.css';

const Contact = ({
  name,
  number,
  id,
  openModalEdit,
  openModalDelete,
  onModalContact,
}) => {
  const handleEdit = (name, number, id) => {
    onModalContact(name, number, id);
    openModalEdit();
  };

  const handleDelete = () => {
    onModalContact(name, number, id);
    openModalDelete();
  };

  return (
    <div className={css.contactBox}>
      <div className={css.dataContact}>
        <h3 className={css.nameContact}>{name}</h3>
        <p className={css.numberContact}>{number}</p>
      </div>
      <div className={css.btnWrapper}>
        <button
          type="button"
          className={css.btnEditContact}
          onClick={() => {
            handleEdit(name, number, id);
          }}
        >
          Edit
        </button>
        <button
          type="submit"
          className={css.btnDeleteContact}
          onClick={() => {
            handleDelete(name, number, id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
