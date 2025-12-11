import './CardEmployee.css';


const CardEmployee = ({ imageUrl, name, position, backgroundColor }) => {

    return (

        <div className='card-employee'>

            <div className='card-employee__image' style={{backgroundColor: backgroundColor}}>
                <img src={`https://github.com/${imageUrl}.png`} alt={name}/>
            </div>

            <div className='card-employee__information'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>

        </div>

    );

}

export default CardEmployee;