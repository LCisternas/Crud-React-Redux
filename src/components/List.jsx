import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductos } from '../store/actions/productosActions';
import Producto from './Producto';

const List = () => {

  const dispatch = useDispatch()
  const productos = useSelector(state => state.productos.productos)
  useEffect(() => {
    const cargarDeProductos = (carga) => dispatch( obtenerProductos(carga) )
    cargarDeProductos(productos)
    // eslint-disable-next-line
  }, [productos])

  return (
    <div className='list-container'>
      <h1>Lista de Productos</h1>
      <table className='main-table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <Producto 
              key={producto.id}
              producto={producto}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default List;