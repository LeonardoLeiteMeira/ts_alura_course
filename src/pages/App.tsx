import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import Stopwatch from '../components/stopwatch';
import ITask from '../types/ITaskInterface';

import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<Array<ITask>>([])
  const [selected, setSelected] = useState<ITask>()

  function selectTask(selectedTask:ITask){
    setSelected(selectedTask)
    setTasks(oldTasks=>oldTasks.map((oldTask)=>(
      {
        ...oldTask,
        selected: selectedTask.id===oldTask.id
      })))
  }

  function concludeTask(){
    setSelected(undefined)
    if(selected){
      setTasks(oldTasks => oldTasks.map((oldTak)=>{
        if(oldTak.id === selected.id){
          return {
            ...oldTak,
            selected:false,
            completed:true
          }
        }
        return oldTak
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        taskList={tasks}
        selectTask={selectTask}
      />
      <Stopwatch
        concludeTask={concludeTask}
        taskSelected={selected}
      />
    </div>
  );
}

export default App;
