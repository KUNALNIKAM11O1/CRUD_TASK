import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const TaskForm = () => {

    const nav = useNavigate()

const [data,setdata] = useState({taskTitle :"",taskDescription:"",taskStatus:"",priority:"",dueDate:"" })


const dataHandler=(e)=>{


    setdata({...data,[e.target.name]:e.target.value})

    console.log(data)
}

const SubmitMe=async(e)=>{
   e.preventDefault()

   try{

    const result = await axios.post(`http://localhost:3000/tasks`,data)

    setdata(result.data)

     setdata({taskTitle :"",taskDescription:"",taskStatus:"",priority:"",dueDate:"" })

     nav('/tasktable')


   } catch(err) {
    console.log(err)
   }

   setdata({taskTitle :"",taskDescription:"",taskStatus:"",priority:"",dueDate:"" })
}




  return (
   <>
   
   <div className="conatiner text-center">
    <h2>Form Page</h2>

    <form onSubmit={(e)=>SubmitMe(e)}>
   

   <div className='my-4'>
    <label htmlFor="">Enter Task Title</label>
    <input type="text" name='taskTitle' id='taskTitle' placeholder='enter task title' value={data.taskTitle} onChange={(e)=>dataHandler(e)}/>
</div>

<div className='my-4'>
    <label htmlFor="">Enter Task Description</label>
    <input type="text" name='taskDescription' id='taskDescription' placeholder='enter task description' value={data.taskDescription}  onChange={(e)=>dataHandler(e)}/>
</div>
  

  <div className='my-4'>
     <label htmlFor="">select the Status</label>
     <input type="text" name='taskStatus' id='taskStatus' placeholder='enter status' value={data.taskStatus} onChange={(e)=>dataHandler(e)} />

      </div>

      <div className='my-4'>

       <label htmlFor="">Enter Priorty</label>
       <select name="priority" id="priority" value={data.priority}  onChange={(e)=>dataHandler(e)}>

        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>

       </select>
   
</div>

<div className='my-4'>
     <label htmlFor="">Enter Due Date</label>
    <input type="date" name='dueDate' id='dueDate' placeholder='enter the date' value={data.dueDate}  onChange={(e)=>dataHandler(e)}/>
</div>

  
  <button type='submit' className='btn btn-sm bg-success'>Submit</button>


    </form>
   </div>
   
   
   </>
  )
}

export default TaskForm