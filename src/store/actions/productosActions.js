import {
  AGREGAR_PRODUCTO,
  OBTENER_PRODUCTO,
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_DESACTUALIZADO,
  EDICION_COMPLETADA,
  ELIMINAR_PRODUCTO,
  ELIMINAR_EXITO
} from '../types';
import Swal from 'sweetalert2';
/* ------------------------------------- */
export function crearProducto(producto) {
  return (dispatch) => {
    dispatch( agregarProducto(producto) )
    Swal.fire(
      'Correcto',
      'El producto se agrego correctamente',
      'success'
    )
  }
}
const agregarProducto = ( producto ) => ({
  type: AGREGAR_PRODUCTO,
  payload: producto
})
/* ------------------------------------- */
export function obtenerProductos(producto) {
  return (dispatch) => {
    dispatch( leyendoProductos(producto) )
  }
}

const leyendoProductos = (productos) => ({
  type: OBTENER_PRODUCTO,
  payload: productos
})
/* ------------------------------------- */
export function actualizarProducto(productoSeleccionado) {
  return async (dispatch) => {
    dispatch( editarProducto(productoSeleccionado) )
    try {
      dispatch( eliminarProductoDesactualizado(productoSeleccionado) )
    } catch (error) {
      console.log(error)
    }
  }
}
const editarProducto = (producto) => ({
  type: EDITAR_PRODUCTO,
  payload: producto
})
const eliminarProductoDesactualizado = producto => ({
  type: EDITAR_PRODUCTO_DESACTUALIZADO,
  payload: producto
})
/* ------------------------------------- */
export function actualizarProductoExito(productoActualizado) {
  return async (dispatch) => {
    dispatch( editarProductoExito(productoActualizado) )
    try {
      dispatch( completarEdicion(productoActualizado) )
      Swal.fire(
        'Todo bien',
        'El producto se actualizo correctamente',
        'success'
      )
    } catch (error) {
      console.log(error)
    }
  }
}
const editarProductoExito = (producto) => ({
  type: EDITAR_PRODUCTO_EXITO,
  payload: producto
})
const completarEdicion = (producto) => ({
  type: EDICION_COMPLETADA,
  payload: producto
})
/* ------------------------------------- */
export function eliminarProducto(producto) {
  return async (dispatch) => {
    dispatch( obtenerProductoEliminar(producto) )
    try {
      dispatch( productoEliminado(producto) )
      Swal.fire(
        '¡Eliminado!',
        'El producto a sido eliminado',
        'success'
      )
    } catch (error) {
      console.log(error)
    }
  }
}
const obtenerProductoEliminar = producto => ({
  type: ELIMINAR_PRODUCTO,
  payload: producto
})
const productoEliminado = producto => ({
  type: ELIMINAR_EXITO,
  payload: producto
})