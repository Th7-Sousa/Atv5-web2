import { useState } from 'react';
import Banner from './Components/Banner';
import Category from './Components/Category';
import Rodape from './Components/Footer/footer';
import Form from './Components/Form';

function App() {


  const categorias = [
    {
      nome: 'Programação',
      corPrimaria: '##57C278',
      corSecundaria: '#D9E7F9',
    },
    {
      nome: 'Front end',
      corPrimaria: '#82cffa',
      corSecundaria: 'E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E3',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Desing',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestao',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]
  let categoriasFilter = [];

  const [livros, setLivros] = useState([]);

  const NovoLivroCadastrado = (livro) => {
    console.log(livro);
    setLivros([...livros, livro]);
  };

  for (let i = 0; i < categorias.length; i++) {
    if(livros.filter(livro => livro.categoria === categorias[i].nome).length > 0){
      categoriasFilter.push(categorias[i]);
    }else{
      continue;
    }
  }

  return (
    <div className="App">
      <Banner />
      <Form
        categoria={categorias.map((categoria) => categoria.nome)}
        livroCadastrado={livro => NovoLivroCadastrado(livro)} />
      {categoriasFilter.map((categoria) => (
        
        <Category
          key={categoria.nome}
          nome={categoria.nome}
          corPrimaria={categoria.corPrimaria}
          corSecundaria={categoria.corSecundaria}
          livros={livros.filter((livro) => livro.categoria === categoria.nome)}
        />
        
      ))}
      <Rodape/>
    </div>
   
  );
}

export default App;
