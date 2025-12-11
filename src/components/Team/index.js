import CardEmployee from '../CardEmployee';
import './Team.css'

const Team = (props) => {

    // const css = { backgroundColor: props.secondaryColor };

    return (

        <section className='team_section' style={{ backgroundColor: props.secondaryColor }}>
            {/* <section className='team_section' style={css}> */}
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <CardEmployee />
            <CardEmployee />
        </section>

    );
}

export default Team;