/* To-do-list App in react */
import React, {useState} from 'react'

function ToDoList() {
    
    const [tasks, setTasks] = useState([]);
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
        </div>
    );
}
export default ToDoList






