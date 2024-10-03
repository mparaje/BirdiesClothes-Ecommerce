import { CSpinner } from '@coreui/react'
import "./loader.css"

export const Loader = () => {
 return (
   <div className="d-flex justify-content-center m-5">
      <CSpinner size="sm" style={{ width: '4rem', height: '4rem'}}/>
   </div> 
 )
}
/* Uso estilos en linea porque no se me modificaba el tamaño de otra forma */