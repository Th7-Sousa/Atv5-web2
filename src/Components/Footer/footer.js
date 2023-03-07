import './styles.css';




function Rodape(){
    return(
        <footer className="banner2">

            {/* <img className='fund' src="./imagens/fundo.png" alt="nao encontrada a foto"/> */}
            <div className='ico'>
                <div><img className='ima'  src='./imagens/fb.png'/></div>
                <div><img className='ima'  src='./imagens/tw.png'/></div>
                <div><img className='ima'  src='./imagens/ig.png'/></div>
            </div>
            <div className='auto'>
                <h4>Desenvolvido por André joás</h4>
            </div>
        </footer>

    )
}

export default Rodape;