import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actualizarProductoExito } from '../store/actions/productosActions';

const Edit = () => {

  const producto = useSelector(state => state.productos.productoEditar)
  const dispatch = useDispatch()
  const actualizarProducto = (productoEditado) => dispatch( actualizarProductoExito(productoEditado) )

  const { nombre, precio, id } = producto
  const [datosProducto, setDatosProducto] = useState({
    nombre: nombre,
    precio: precio,
    id: id
  })
  const onChangeProducto = e => {
    setDatosProducto({
      ...datosProducto,
      [e.target.name] : e.target.value
    })
  }
  const history = useHistory()
  const onSubmitProducto = e => {
    e.preventDefault()
    actualizarProducto(datosProducto)
    history.push('/')
  }

  return (
    <div className='form-edit'>
      <h1>Editar Producto</h1>
      <form onSubmit={onSubmitProducto}>
        <input 
          type='text'
          name='nombre'
          value={datosProducto.nombre}
          placeholder='Nuevo nombre'
          onChange={onChangeProducto}
        />
        <input 
          type='number'
          name='precio'
          value={datosProducto.precio}
          placeholder='Nuevo Precio'
          onChange={onChangeProducto}
        />
        <button
          type='submit'
        > Editar </button>
      </form>
    </div>
  );
}
 
export default Edit;