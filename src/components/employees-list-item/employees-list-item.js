import './employees-list-item.css';

const EmployeesListItem = (props) => {
  const { name, salary, handleDelete, handleToggleProp, increase, rise } = props;

  let classNames = 'list-group-item d-flex justify-content-between';
  classNames += increase ? ' increase' : '';
  classNames += rise ? ' like' : '';

  return (
    <li className={classNames}>
      <span className='list-group-item-label' onClick={handleToggleProp} data-toggle='rise'>
        {name}
      </span>
      <input type='text' className='list-group-item-input' defaultValue={`$${salary}`} />
      <div className='d-flex justify-content-center align-items-center'>
        <button
          type='button'
          className='btn-cookie btn-sm '
          onClick={handleToggleProp}
          data-toggle='increase'
        >
          <i className='fas fa-cookie'></i>
        </button>

        <button type='button' className='btn-trash btn-sm ' onClick={handleDelete}>
          <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
