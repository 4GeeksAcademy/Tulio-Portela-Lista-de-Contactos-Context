import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      // Llamar a getState para obtener el estado inicial
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    // Usar useEffect para realizar tareas de inicialización si es necesario
    useEffect(() => {
      // Aquí puedes realizar tareas de inicialización, como cargar datos iniciales
      // Ejemplo:
      // state.actions.loadSomeData();
    }, []);

    // Devuelve el componente con el contexto proporcionado
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  // Devuelve el componente envuelto
  return StoreWrapper;
};

export default injectContext;
