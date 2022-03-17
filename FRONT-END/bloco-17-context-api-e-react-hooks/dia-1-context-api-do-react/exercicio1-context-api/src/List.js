import React, { useContext, useEffect } from 'react';
import ToDoContext from './context/ToDoContext';

function List() {
    const { tasks, removeTask, setCounter } = useContext(ToDoContext);

    useEffect(() => {
      if(tasks.length > 2){
        setCounter(tasks.length + 1000);
      }
    }, [tasks]); //sem [], roda quando receber algo novo, [] vazio é didMount, [conteudo] didUpdate
    return (
        <div>
           { tasks.map((task) => (
             <p
             onClick={() => removeTask(task)}
             >
              { task }
            </p>)) }
        </div>
    )
}

export default List;