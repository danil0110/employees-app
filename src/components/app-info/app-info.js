import './app-info.css';

const AppInfo = ({ totalIncreaseEmployees, totalRiseEmployees, employeesCount }) => {
  return (
    <div className='app-info'>
      <h1>Учет сотрудников</h1>
      <h2>Количество сотрудников: {employeesCount}</h2>
      <h2>Сотрудники с премией: {totalIncreaseEmployees()}</h2>
    </div>
  );
};

export default AppInfo;
