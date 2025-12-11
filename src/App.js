import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [

    {
      name: 'Programação',
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      name: 'Front-End',
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      name: 'Data Science',
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      name: 'Devops',
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      name: 'UX e Design',
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      name: 'Mobile',
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    }

  ];

  const [employees, setEmployees] = useState([]);

  const onEmployeeNewAdd = (employee) => {
    console.log(employee)
    // employees.push(employee)
    setEmployees([...employees, employee]) // adiciona os colaboradores antigos mais o colaborador novo no final
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onEmployeeRegistered={employee => onEmployeeNewAdd(employee)} />

      {/* For each team, a Team tag is created with its information */}
      {/* Para cada time dentro do dicionário teams uma tag Team é criada com as suas devidas informações */}
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        employees={employees.filter(employee => employee.team === team.name)} // Filtra o colaborador através do nome do time
      />)}

    </div>
  );
}

export default App;
