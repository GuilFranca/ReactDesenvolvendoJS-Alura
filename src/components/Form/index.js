import './Form.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [team, setTeam] = useState('Programação');

    const onSave = (event) => {
        event.preventDefault();
        console.log('From enviado => ', name, position, imageUrl, team);
        // Passando um objeto com os valores do colaboradore para determinada props que irá passar para fora do formulário
        props.onEmployeeRegistered({
            name,
            position,
            imageUrl,
            team
        })
    }

    return (

        <section className='form__section'>

            <form onSubmit={onSave}>

                <h2>Preencha os dados para criar o card do seu colaborador</h2>

                <TextField
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    inputValue={name}
                    onChanged={inputValue => setName(inputValue)}
                />

                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    inputValue={position}
                    onChanged={inputValue => setPosition(inputValue)}
                />

                <TextField 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    inputValue={imageUrl}
                    onChanged={inputValue => setImageUrl(inputValue)}
                />

                <DropdownList 
                    obrigatorio={true} 
                    label='Time'
                    items={props.teams}
                    inputValue={team}
                    onChanged={inputValue => setTeam(inputValue)}
                />

                <Button>
                    Criar Card
                </Button>

            </form>

        </section>

    )


}

export default Form;