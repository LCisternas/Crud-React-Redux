import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearProducto } from '../store/actions/productosActions'
import { nanoid } from 'nanoid';

const Form = () => {

  const dispatch = useDispatch()
  const agregarProducto = (producto) => dispatch( crearProducto(producto) )

  const [nuevoProducto, setProducto] = useState({
    nombre: '',
    precio:'',
    id: ''
  })

  const onChangeProducto = e => {
    setProducto({
      ...nuevoProducto,
      [e.target.name] : e.target.value,
      id: nanoid()
    })
  }
  const sendProducto = e => {
    e.preventDefault()
    agregarProducto(nuevoProducto)
    setProducto({
      nombre: '',
      precio: ''
    })
  }

  return (
    <div className='form-container'>
      <h1>Agrega un producto a tu lista</h1>
      <form onSubmit={sendProducto}>
        <input 
          type='text'
          name='nombre'
          value={nuevoProducto.nombre}
          placeholder='Nombre del producto'
          onChange={onChangeProducto}
        />
        <input 
          type='number'
          name='precio'
          value={nuevoProducto.precio}
          placeholder='Precio del producto'
          onChange={onChangeProducto}
        />
        <button
          type='submit'
        > Agregar </button>
      </form>
    </div>
  );
}
 
export default Form;