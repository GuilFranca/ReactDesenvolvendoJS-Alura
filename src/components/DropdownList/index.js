import './DropdownList.css';

const DropdownList = (props) => {

    // console.log(props.items);

    return (
        <div className='dropdown__list'>
            <label>{props.label}</label>
            <select onChange={event => props.onChanged(event.target.value)} required={props.obrigatorio} value={props.inputValue}>
                {/* {props.items.map(item => <option>{item}</option>)} */}
                {props.items.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}

export default DropdownList;