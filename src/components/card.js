import React, { useState } from "react";
import EditTask from './modals/EditTask'

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {

    const [modal, setModal] = useState(false)

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal)
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div className="card-wrapper mr-5" style={{ marginBottom: "20px" }}>
            <span className="card-header" style={{ backgroundColor: colors[index % 5].secondaryColor }}>{taskObj.Name}</span>
            <div className="card-top" style={{ backgroundColor: colors[index % 5].primaryColor }}></div>
            <div className="task-holder">
                
                <p className="mt-3">{taskObj.Description}</p>
                <div className="icons">
  <i className="far fa-edit mr-3" style={{ marginRight: "5px", color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={() => setModal(true)}></i>
  <i className="fas fa-trash-alt" style={{ marginRight: "5px", color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={handleDelete}></i>
  <input className="fas" type="checkbox" value={taskObj.Name} style={{ marginLeft: "5px" }}></input>
</div>

            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    )
}

export default Card;
