/* To-do-list App in react */
import React, {useState} from 'react'

function ToDoList() {
    
    const [tasks, setTasks] = useState(["Eat fish","Take shower", "Walk"]);
    const [newTask, setNewTask] = useState("");

   function handleInputChange(event) {
        setNewTask(event.target.value);
   }
   function addTask() {

   }
   function deleteTask(index) {

   }
   function moveTaskUp(index) {

   }
   function moveTaskDown(index) {

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
                        onClick={addTask} > add </button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index} >
                        <span className="text"> {task} </span>
                        <button className="delet-button"
                                onClick={() => deleteTask(index)} > 
                                delete
                        </button>
                        <button className="up-button"
                                onClick={() => moveTaskUp(index)} >
                                👆
                        </button>
                        <button className="down-button"
                                onClick={() => moveTaskDown(index)} >
                                👇
                        </button>
                    </li>)}
            </ol>
        </div>
    );
}
export default ToDoList






