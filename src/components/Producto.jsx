import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actualizarProducto, eliminarProducto } from '../store/actions/productosActions'

const Producto = ({ producto }) => {

  const { nombre, precio, id } = producto

  const dispatch = useDispatch()
  const editarProducto = (productoSeleccionado) => dispatch( actualizarProducto(productoSeleccionado) )
  const eliminarProductos = (productoSeleccionado) => dispatch( eliminarProducto(productoSeleccionado) )
  const history = useHistory()
  const obteniendoProducto = (dataProducto) => {
    editarProducto(dataProducto)
    history.push(`/edit/${id}`)
  }

  return (
    <tr className='product-row'>
      <td> { nombre } </td>
      <td> $ { precio } </td>
      <td className='acciones'>  
        <button 
          type='button'
          onClick={() => obteniendoProducto(producto)}
          > Editar Producto </button>
          <button
            type='button'
            onClick={() => eliminarProductos(producto)}
          > Eliminar </button>
      </td>
    </tr>
  );
}
 
export default Producto;