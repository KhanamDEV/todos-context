import React from 'react';

const AppContext = React.createContext({tasks: localStorage.getItem('todos') == null ? {} : JSON.parse(localStorage.getItem('todos'))});
export  const AppContextConsumer = AppContext.Consumer;
export default AppContext;