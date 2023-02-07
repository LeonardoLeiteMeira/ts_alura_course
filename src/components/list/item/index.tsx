import ITask from '../../../types/ITaskInterface';
import Style from './Item.module.scss'

interface ItemProps{
    selectTask:(selectedtask:ITask)=>void
    task:ITask
}

function Item({task,selectTask}:ItemProps){
    return <li  
        className={`${Style.item} ${task.selected?Style.selectedItem:""} ${task.completed?Style.completedItem:""}`} 
        onClick={()=>!task.completed&&selectTask(task)}
        >
            <h3>{task.task}</h3>
            <span>{task.time}</span>
            {task.completed
                &&
            <span className={Style.completed} aria-Label="task completed" ></span>}
     </li>
}

export default Item;