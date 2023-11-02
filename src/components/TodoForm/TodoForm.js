import './TodoForm.css'

function TodoForm(){
    return(
        <div className="formContainer">
            <h2>Crear Nueva Tarea</h2>
            <form>
                <div className="inputContainer">
                    <label>Nueva Tarea:</label><br/>
                    <input type='text' placeholder='Tarea'/>
                </div>
                <div className='inputContainer'>
                    <input type='submit' value='Guardar' className='submitBtn'/>
                </div>
            </form>
        </div>
    )
}

export {TodoForm}