/* To-do-list App in react */
import React, {useState} from 'react'

function ToDoList() {
    
    const [tasks, setTasks] = useState(["Eat fish","Take shower", "Walk"]);
    const [newTask, setNewTask] = useState("");

   function handleInputChange(event) {
        setNewTask(event.target.value);
   }
   function addTask() {
        /* it's always good practice to use updater function */
        //setTasks( t => [...t, newTask]);
        /* to reset after adding new task */
        //setNewTask("");
        /* when somebody couldn't type any task they can simply 
        add an empty task so to that we have *** */
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
   }
   function deleteTask(index) {
        const newUpdatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(newUpdatedTasks);
   }
   function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            /* we use array destructuring to swap two elements within our array */
            // so here's the formula 
            [updatedTasks[index],updatedTasks[index -1]] = [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
   }
   function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
   }
    return(
        <div className="to-do-list" >
            <h1> To-do-list📝 </h1>
            <div>
                <input type="text"
                       placeholder="Enter a task...."
                       value={newTask}
                       onChange={handleInputChange} />
                <button className="add-button"
                        onClick={addTask} > Add </button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index} >
                        <span className="text"> {task} </span>
                        <button className="delete-button"
                                onClick={() => deleteTask(index)} > 
                                Delete
                        </button>
                        <button className="move-button"
                                onClick={() => moveTaskUp(index)} >
                                ⬆️
                        </button>
                        <button className="move-button"
                                onClick={() => moveTaskDown(index)} >
                                ⬇️
                        </button>
                   </li>)}
            </ol>
        </div>
    );
}
export default ToDoList

/* hsla(180, 100%, 62%, 0.78) */




