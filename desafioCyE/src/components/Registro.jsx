import React from 'react'
import SocialButton from './SocialButton'
import Formulario from './Formulario'
import Alert from './Alert'

const Registro = () => {
  const iconos = ['facebook', 'github', 'linkedin']
  return (
    <>
      <div className='tarjetaForm'>
        <h3 className='Titulo'>Crear una cuenta</h3>
        <SocialButton icons={iconos} />
        <Formulario />
        <Alert />
      </div>
    </>
  )
}

export default Registro