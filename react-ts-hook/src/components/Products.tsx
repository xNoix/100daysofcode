
interface Props {
    productos: Array <{
        nombre: string
        marca: string
        src: string
        categoria: string
        subCategoria: string
        precio: number
        stock: number 
      }>
}

const Products = ({productos}: Props) => {
    return (
        <ul>
        {
          productos.map(item => {
            return (
                <div key={item.nombre} className="Container">
                    <div className="Container__img">
                        <a className="">
                            <img src={item.src} className="img"/>
                        </a>
                    </div>
                    <div className="Container__img">
                        <span>{item.marca}</span>
                    </div>
                    <div className="Container__nombre">
                        <span>{item.nombre}</span>
                    </div>
                    <div className="Container__stock">
                        <span>{item.stock}</span>
                    </div>
                    <div className="Container__precio">
                        <span>${item.precio}</span>
                    </div>
                    <div className="Container__button">
                        <div className="">
                            <button className="" type="button">
                                <span>Agregar</span>
                            </button>
                        </div>
                    </div>
                </div>
            )
          })
        }
      </ul>
    )
}

export default Products