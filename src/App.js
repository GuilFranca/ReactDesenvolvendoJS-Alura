import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [employees, setEmployees] = useState('');

  const onEmployeeNewAdd = (employee) => {
    console.log(employee)
    // employees.push(employee)
    setEmployees([...employees, employee]) // adiciona os colaboradores antigos mais o colaborador novo no final
  }

  return (
    <div className="App">
      <Banner />
      <Form onEmployeeRegistered={employee => onEmployeeNewAdd(employee)}/>
    </div>
  );
}

export default App;
