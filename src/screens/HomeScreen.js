import React from 'react';
import FormTodoComponent from "../components/FormTodoComponent";
import ListTaskComponent from "../components/ListTaskComponent";

const HomeScreen = () => {

    return (
            <main id="main-container">
                <section id="wrap-todo">

                    <div className="container">
                        <h1>My Todos</h1>
                        <FormTodoComponent/>
                        <ListTaskComponent/>
                    </div>
                </section>
            </main>

    )
}

export default HomeScreen;