import React, { useState } from 'react'
import ITask from '../../types/ITaskInterface'
import Item from './item'
import style from './List.module.scss'

interface ListProps {
    taskList:Array<ITask>
    selectTask:(task:ITask)=>void
}

function List({taskList, selectTask}:ListProps){
    return <aside className={style.taskList}>
        <h2>Daily Studies</h2>
        <ul>
            {taskList.map((item, index)=>(
                <Item
                    key={item.id}
                    selectTask={selectTask}
                    task={item}
                />
            ))}
        </ul>
    </aside>
}

export default List