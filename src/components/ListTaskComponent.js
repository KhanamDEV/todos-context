import React from 'react';
import ItemTaskComponent from "./ItemTaskComponent";
import {AppContextConsumer} from "../contexts/Context";

const ListTaskComponent = props => {

    return (
        <AppContextConsumer>
            {
                ({tasks}) =>
                    <section id="wrap-task" className="mt-3">
                        {tasks.map(value =>
                            <ItemTaskComponent
                                key={value.id.toString()} task={value}/>
                        )}
                    </section>
            }
        </AppContextConsumer>

    )
}


export default ListTaskComponent;