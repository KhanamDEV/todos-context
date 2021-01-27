import React, {useState} from 'react';
import {checkEmpty, generateUUID} from "../utils";
import {AppContextConsumer} from '../contexts/Context'

const FormTodoComponent = props => {
    const initialValid = {
        name: {
            status: false,
            message: '',
            content: ''
        },
        description: {
            status: false,
            message: '',
            content: ''
        }
    };
    const [valid, setValid] = useState(initialValid);

    let className = (!valid.name.status && !checkEmpty(valid.name.message)) || (!valid.description.status && !checkEmpty(valid.description.message)) ? 'bg-grey padding-invalid' : 'bg-grey';

    const changeInput = (e) => {
        let target = e.target;
        let name = target.name;
        let content = target.value;
        const objInput = {
            [name]: {
                status: !checkEmpty(content),
                content: content,
                message: `The ${name} field is required`
            }
        }
        setValid({...valid, ...objInput});
    }

    const addTask = (createTask) => {
        if (valid.name.status && valid.description.status) {
            const dataSend = {
                id: generateUUID(),
                name: valid.name.content,
                description: valid.description.content,
                status: false
            }
            createTask(dataSend);
            setValid(initialValid);
        }
    }
    return (
        <AppContextConsumer>
            {
                ({creatTask}) =>
                    <section id="wrap-form-todo" className={className}>
                        <form>
                            <div className="form-row">
                                <div className="col-md-4 form-group">
                                    <label htmlFor="inputName">Name</label>
                                    <input type="text" id="inputName" name="name" placeholder="Enter name todo..."
                                           className="form-control" value={valid.name.content} onChange={changeInput}/>
                                    {(!valid.name.status && !checkEmpty(valid.name.message)) &&
                                    <span>{valid.name.message}</span>}
                                </div>
                                <div className="col-md-6 form-group">
                                    <label htmlFor="inputDescription">Description</label>
                                    <input type="text" id="inputDescription" name="description"
                                           placeholder="Enter description todo..." className="form-control"
                                           value={valid.description.content} onChange={changeInput}/>
                                    {(!valid.description.status && !checkEmpty(valid.description.message)) &&
                                    <span>{valid.description.message}</span>}
                                </div>
                                <div className="col-md-2 btn-action">
                                    <button type="button"  className="btn add-todo"  onClick={() => addTask(creatTask)}>
                                        Add Todo
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
            }
        </AppContextConsumer>
    )
}


export default FormTodoComponent;