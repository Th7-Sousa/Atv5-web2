import './index.css';
// import foto from '../Book/FOTO.tmp'

const Book = (props) =>{
    return(
        <div className='livro'>
            <div className='cabecalho'>
            </div>
            <div>
                <img src='https://abre.ai/fRUy' alt=""/>    
            </div>
            <div className='rodape'>
                <h4>{props.autor}</h4>    
                <h5>{props.titulo}</h5>    
            </div>      
        </div>
    )
}

export default Book;