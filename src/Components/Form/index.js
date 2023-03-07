import Button from '../Button';
import { useState } from 'react';
import Dropdown from '../Dropdown';
import InputText from '../inputText'
import './index.css';
function Form(props) {



    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [capa, setCapa] = useState('')
    const [categoria, setCategoria] = useState('')



    const Salvar = (evento) => {
        evento.preventDefault()
        // console.log('Form foi submetido =>', titulo, autor, capa, categoria)
        props.livroCadastrado({
            titulo,
            autor,
            capa,
            categoria
           })
        
    }


    // função que intercepita o carregamento automatico da pagina logo apos clicar no botao
    return (
        <section className="formulario">
            <form onSubmit={Salvar}>
                <h2 >Preencha os dados para criar o card do livro</h2>
                <InputText
                    obrigatorio={true}
                    label='Título'
                    placeholder='Digite um título do livro'
                    valor={titulo}
                    Alterado={valor => setTitulo(valor)}
                />

                <InputText
                    obrigatorio={true}
                    label='Autor'
                    placeholder='Digite o nome do autor'
                    valor={autor}
                    Alterado={valor => setAutor(valor)}
                />
                <InputText
                    label='Capa'
                    placeholder='Digite o endereço da capa'
                    valor={capa}
                    Alterado={valor => setCapa(valor)}
                />
                <Dropdown
                    obrigatorio={true}
                    label="Categoria"
                    itens={props.categoria}
                    valor={categoria}
                    Alterado={valor => setCategoria(valor)}
                />
                <Button>
                    criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;