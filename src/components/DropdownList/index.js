import './DropdownList.css';

const DropdownList = (props) => {

    // console.log(props.items);

    return (
        <div className='dropdown__list'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {/* {props.items.map(item => <option>{item}</option>)} */}
                {props.items.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}

export default DropdownList;