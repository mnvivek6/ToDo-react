import React, { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const createTask=({modal,toggle,save})=>{

    const [taskName,setTaskName]=useState('')
    const [Description,setDescription]=useState('')

    const handleChange = (e)=>{
       const {name,value}= e.target

       if (name==="taskName") {
        setTaskName(value)
       }else{
        setDescription(value)
       }
    }
       const handleSave =()=>{
         // const notify = () => toast("Oops its a empty task");
        let taskObj ={}
        if (!taskName&& !Description) {

      //   notify
window.alert('Oops There is nothing in the task session')
        }else{
         taskObj["Name"]=taskName
        taskObj['Description']= Description

        save(taskObj);
        }
        
       }
    
    return (
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
             <div className='form-group'>
                <label>Task Name</label>
                   <input type='text' className='form-control' value={taskName} 
                   onChange={handleChange}  name='taskName'/>
             </div>
             <div className='form-group'>
                <label>Description</label>
                   <textarea rows="5" className='form-control' value={Description}
                    onChange={handleChange}  name='description'></textarea>
             </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}> Create</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
}


export default createTask
 