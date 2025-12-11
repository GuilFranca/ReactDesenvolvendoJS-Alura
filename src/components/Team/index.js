import CardEmployee from '../CardEmployee';
import './Team.css'

const Team = (props) => {

    // const css = { backgroundColor: props.secondaryColor };

    return (

        <section className='team-section' style={{ backgroundColor: props.secondaryColor }}>
            {/* <section className='team_section' style={css}> */}
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

            <div className='team-container'>

                {props.employees.map( employee => <CardEmployee 
                    name={employee.name}
                    position={employee.position}
                    imageUrl={employee.imageUrl}
                    team={employee.team}
                    backgroundColor={props.primaryColor}
                />)}

            </div>

        </section>

    );
}

export default Team;