import { useState } from 'react' 


const Formulario = () => {
    const [nombre, setNombre] =useState("");
    const [mail, setMail] =useState("");
    const [pass, setPass] =useState("");
    const [pass2, setPass2] =useState("");
    const [error, setError] =useState("");
    const [error2, setError2] =useState("");

    const validarInput = (e) => {
        e.preventDefault();

        if (nombre === '' || mail === '' || pass === '' || pass2 === ''){
            setError(true);
            return;
        }

        if (pass != pass2) {
            setError2(true);
            return;
        }
        setError(false);
        setError2(false);
        setNombre('');
        setMail('');
        setPass('');
        setPass2('');
    }
    
  return (
    <>
        <form onSubmit={validarInput}>
            
            <div className='form-group'>
                <label>Nombre</label>
                <input className='form-control' type="text" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            </div>
            <div className='form-group'>
                <label>Mail</label>
                <input className='form-control' type="text" onChange={(e) => setMail(e.target.value)} value={mail}/>
            </div>
            <div className='form-group'>
                <label>Contraseña</label>
                <input className='form-control' type="text" onChange={(e) => setPass(e.target.value)} value={pass}/>
            </div>
            <div className='form-group'>
                <label>Confirmar Contraseña</label>
                <input className='form-control' type="text" onChange={(e) => setPass2(e.target.value)} value={pass2}/>
            </div>
            <button className='btn btn-primary mt-3' type='submit'>Enviar</button>
            {error ? <p className='error'>Faltan Datos</p> : null}
            {error2 ? <p className='error2'>Contraseña no Coincide</p> : null}
        </form>
    </>
  )
}

export default Formulario