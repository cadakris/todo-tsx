import React, { useState } from 'react';

export const NewTodoForm: React.FC<{addTodo: Function}> = (props) => {

    //SET STATE THAT WILL CAPTURE THE INPUT VALUE 
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    //FUNCTION THAT HANDLES THE ONCHANGE EVENT FOR THE INPUT
    // commented out way below is another way to handle change in line 
    // const handleDescription = (e) => {
    //     setDescription(e.target.value)
    // }

    const handleAssigned = (e: any) => {
        setAssigned(e.target.value)  
    }

    //FUNCTION THAT HANDLES THE SUBMIT EVENT FOR THE FORM
    const submitToDo = () => {
        if(description !== "" && assigned !== "") {
           props.addTodo(description, assigned)
           //making form clear
           setDescription('');
           setAssigned('');
        }
    }

  return (
    <div className="mt-5">
        <form>
            <div className = 'mb-3'>
                <label className = "form-label">Assigned</label>
                <input 
                    type = "text" 
                    className = "form-control" 
                    required
                    onChange={handleAssigned}
                    value={assigned}>
                </input>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        rows={3} 
                        required
                        onChange={e=>setDescription(e.target.value)}
                        value={description}>
                    </textarea>
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary mt-3" 
                    onClick={submitToDo}
                    >Add Todo</button>
            </div>
        </form>
    </div>
    
    )
}

