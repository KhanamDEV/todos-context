import React from 'react';
import {AppContextConsumer} from "../contexts/Context";

const ItemTaskComponent = props => {
    const className = !props.task.status ? 'item-task bg-grey' : 'item-task bg-grey success';
    return (
        <AppContextConsumer>
            {
                ({updateTask, removeTask}) =>
                    <div className={className}>
                        <div className="content-task">
                            <h3>{props.task.name}</h3>
                            <p>{props.task.description}</p>
                        </div>
                        <div className="action-task">
                            {!props.task.status && <button className="btn" onClick={() => updateTask(props.task.id)} >Complete</button>}
                            <button className="btn" onClick={() => removeTask(props.task.id)} >Delete</button>
                        </div>
                    </div>
            }
        </AppContextConsumer>
    )
}

export default ItemTaskComponent;