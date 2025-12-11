import './CardEmployee.css';


const CardEmployee = () => {

    return (

        <div className='card-employee'>

            <div className='card-employee__image'>
                <img src='https://github.com/GuilFranca.png' alt='Guilherme França Fernandes'/>
            </div>

            <div className='card-employee__information'>
                <h4>Guilherme França Fernandes</h4>
                <h5>Estagiário</h5>
            </div>

        </div>

    );

}

export default CardEmployee;