import './Button.css';

const Button = (props) => {
    return (
        <button className='addCardButton'>
            {props.children}
        </button>
    )
}

export default Button;
