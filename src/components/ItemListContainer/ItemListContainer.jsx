import "./itemListContainer.css"

export const ItemListContainer = ({gretting}) =>{
    return(
        <section className="contenedor-itemlist">
            <h1 className="title">{gretting}</h1>
            <p className="description">Explora todos los articulos que tenemos disponibles para vos</p>
        </section>
    )
}