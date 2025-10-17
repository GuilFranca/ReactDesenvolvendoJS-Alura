import './Form.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';

const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (

        <section className='form__section'>
            <form>
                <h2>Preencha os dados para criar o card do seu colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
                <DropdownList label='Time' items={times}/>
            </form>
        </section>

    )

}

export default Form;