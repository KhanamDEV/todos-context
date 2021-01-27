import React from 'react';
import FormTodoComponent from "../components/FormTodoComponent";
import ListTaskComponent from "../components/ListTaskComponent";
import Provider from "../contexts/Provider";

const HomeScreen = () => {

    return (
        <main id="main-container">
            <section id="wrap-todo">

                <div className="container">
                    <h1>My Todos</h1>
                    <Provider>
                        <FormTodoComponent />
                        <ListTaskComponent />
                    </Provider>
                </div>
            </section>
        </main>
    )
}

export default HomeScreen;