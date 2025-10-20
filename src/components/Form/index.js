import './Form.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';

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

    const aoSalvar = (event) => {
        event.preventDefault();
        console.log('From enviado');
    }

    return (

        <section className='form__section'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do seu colaborador</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
                <DropdownList obrigatorio={true} label='Time' items={times}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>

    )


}

export default Form;