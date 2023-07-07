import React ,{useEffect, useState} from 'react'
import Card from './card'
import 'bootstrap/dist/css/bootstrap.min.css'

import CreateTask from './modals/createTask';
function TodoList() {
    
    const [modal, setModal] = useState(false);
    const [taskList,setTaskList] = useState([])

    useEffect(() =>{
        let arr= localStorage.getItem('taskList')
     
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[])

    const deleteTask= (index)=>{
           
        let tempList = taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
     

    }
   
    const updateListArray=(obj,index)=>{
        let tempList = taskList
        tempList[index]=obj
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
   }
    const toggle =()=>{
        setModal(!modal)
    }


    const saveTask = (taskobj)=>{
       let tempList  = taskList
       tempList.push(taskobj)
       localStorage.setItem("taskList",JSON.stringify(tempList))
       setTaskList(tempList)
       setModal(false)
    }


        
  return (
   
    <div>
   
     <div className='header'>
      <h3>ToDo List</h3>
      <button className='btn btn-light mt-2' onClick={()=>setModal(true)}>Create Task</button>
    
    </div>
    <div className='task'>
    <div className='task-container'>
     {taskList && taskList.map((obj,index)=> <Card taskObj={obj} index ={index} 
     deleteTask= {deleteTask} updateListArray={updateListArray}/>)}
    </div>
    </div>
   
  

   
    <CreateTask toggle = {toggle} modal ={modal} save={saveTask}/>
    </div>

 
  )
}


export default TodoList
