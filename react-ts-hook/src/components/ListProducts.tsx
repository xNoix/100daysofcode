import {useState, useEffect} from 'react';
import Products from './Products';
import './ListProducts.css'

const INITIAL_STATE = [ 
    {
      "nombre": "Leche Descremada 1L",
      "marca": "Soprole",
      "src": "img/img-items/img1.jpg",
      "categoria": "lactios",
      "subCategoria": "Leches",
      "precio": 12,
      "stock": 1
  },
  {
      "nombre": "Leche Descremada 1L",
      "marca": "Lonco Leche",
      "src": "img/img-items/img2.jpg",
      "categoria": "lactios",
      "subCategoria": "Leches",
      "precio": 12,
      "stock": 1
  },
  {
      "nombre": "Leche Descremada 1L",
      "marca": "Cuisine & Co",
      "src": "img/img-items/img3.jpg",
      "categoria": "lactios",
      "subCategoria": "Leches",
      "precio": 12,
      "stock": 1
  },
  {
      "nombre": "Yoghurt Natural Endulzado",
      "marca": "Colun",
      "src": "img/img-items/img4.jpg",
      "categoria": "lacteos",
      "subCategoria": "Yoghurt",
      "precio": 12,
      "stock": 1
  },
  {
      "nombre": "Yoghurt Natural No Endulzado",
      "marca": "Colun",
      "src": "img/img-items/img5.jpg",
      "categoria": "lacteos",
      "subCategoria": "Yoghurt",
      "precio": 12,
      "stock": 1
  },
  {
      "nombre": "Queso Cheddar",
      "marca": "Cuisine & Co",
      "src": "img/img-items/img6.jpg",
      "categoria": "lacteos",
      "subCategoria": "Quesos",
      "precio": 12,
      "stock": 1
  },
  {
      "nombre": "Queso Mozarrela",
      "marca": "Granorolo",
      "src": "img/img-items/img7.png",
      "categoria": "lacteos",
      "subCategoria": "Quesos",
      "precio": 12,
      "stock": 1
  },
  {
      "nombre": "Queso Cammerbert",
      "marca": "Quillayes",
      "src": "img/img-items/img8.jpg",
      "categoria": "lacteos",
      "subCategoria": "Quesos",
      "precio": 12,
      "stock": 1
  },
  {
      "nombre": "Queso Mantecoso",
      "marca": "Cuisine & Co",
      "src": "img/img-items/img9.jpg",
      "categoria": "lacteos",
      "subCategoria": "Quesos",
      "precio": 12,
      "stock": 1
  }
  ]
  
  interface AppState {
    products : Array<Productos>
  }
  
  interface Productos {
    nombre: string
    marca: string
    src: string
    categoria: string
    subCategoria: string
    precio: number
    stock: number 
  }
  
  function List() {
    const [producto, setProducto] = useState<AppState["products"]>([])
    
    useEffect(() => {
      setProducto(INITIAL_STATE)
    }, [])
  
    return (
      <div className='box'>
        < Products productos={producto}/>
      </div>
    );
  }
  
  export default List;