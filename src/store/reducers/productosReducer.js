import {
  AGREGAR_PRODUCTO,
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_DESACTUALIZADO,
  EDICION_COMPLETADA,
  ELIMINAR_PRODUCTO,
  ELIMINAR_EXITO
} from '../types';

const initialState = {
  productos: [],
  productoEditar: null,
  productoEliminar: null
};
// eslint-disable-next-line
export default function(state = initialState, action) {
  switch(action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload]
      }
    case EDITAR_PRODUCTO:
      return {
        ...state,
        productoEditar: action.payload,
      }
    case EDITAR_PRODUCTO_DESACTUALIZADO:
      return {
        ...state,
        productos: state.productos.filter(producto => producto.id !== state.productoEditar.id)
      }
    case EDITAR_PRODUCTO_EXITO:
      return {
        ...state,
        productoEditar: action.payload,
      }
    case EDICION_COMPLETADA:
      return {
        ...state,
        productos: [...state.productos, action.payload]
      }
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productoEliminar: action.payload
      }
    case ELIMINAR_EXITO:
      return {
        ...state,
        productos: state.productos.filter(producto => producto.id !== state.productoEliminar.id)
      }    
    default:
      return state
  }
}