import './formulario.css'

function Formulario({onCreate}){
    return(
        <div className='formContainer'>
            <h2>Crear una nueva tarea</h2>
            <form>
                <div>
                    <label>Descripcion:</label>
                    <input type='text' placeholder='Tarea que debes realizar' id='descripcion' name='descripcion'/>
                </div>
                <input type='submit' value='Crear'/>
            </form>
        </div>
    )
}

export {Formulario}