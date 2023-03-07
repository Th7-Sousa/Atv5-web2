import Book from '../Book';
import './index.css'

const Category = (props) => {
    return (
        <section className='cateogoria'
            style={{ backgroundColor: props.corSecundaria, display: "flex", flexDirection: "column", flexWrap:"wrap", textAlign: "center", justifyContent:"center"}}>
            <h3 style={{ borderColor: props.corPrimaria, fontSize: "32px",borderBottomS: "4px solid",display: "flex",flexDirection: "row",paddingBottom: "8px", marginLeft:"45rem"}}>{props.nome}</h3>

            <div className='livros' style={{  display: "flex",flexDirection: "row",gap:"20px",justifyContent: "space-between",marginTop: "12px", flexWrap: "wrap"}}>
                {props.livros.map((livro) => (
                    <Book autor={livro.autor} titulo={livro.titulo} capa={livro.capa} />
                ))}</div>

        </section>
    )
}
export default Category;