import CardEmployee from '../CardEmployee';
import './Team.css'

const Team = (props) => {

    return (

        // Caso a lista de colaboradores seja maior que zero irá retornar o que está ao lado do &&
        (props.employees.length) > 0 ? <section className='team-section' style={{ backgroundColor: props.secondaryColor }}>
                <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

                <div className='team-container'>

                    {props.employees.map( employee => <CardEmployee
                        key={employee.name}
                        name={employee.name}
                        position={employee.position}
                        imageUrl={employee.imageUrl}
                        team={employee.team}
                        backgroundColor={props.primaryColor}
                    />)}

                </div>

            </section>
            : ''

    );
}

export default Team;