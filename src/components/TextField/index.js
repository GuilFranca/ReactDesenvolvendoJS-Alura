import './TextField.css';

const TextField = (props) => {
    // console.log(props);

    // let inputValue = 'Guilherme França';

    // const [inputValue, setInputValue] = useState('');

    const handleTyping = (event) => {
        props.onChanged(event.target.value);
        // console.log(props.inputValue);
    }

    return (

        <div className="text__field">
            <label> 
                {props.label}
            </label>
            <input value={props.inputValue} onChange={handleTyping} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>

    )
}

export default TextField;