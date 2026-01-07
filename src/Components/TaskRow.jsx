import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const TaskRow = () => {

    const nav = useNavigate()

  const {id} = useParams()

  const [data,setdata] = useState({taskTitle :"",taskDescription:"",taskStatus:"",priority:"",dueDate:"" })


  const FetchData=async()=>{
     
    try{

        const result = await axios.get(`http://localhost:3000/tasks/${id}`)

        console.log(result.data)

       

       
    setdata({taskTitle :result.data.taskTitle ,
             taskDescription:result.data.taskDescription,
             taskStatus:result.data.taskStatus,
            priority:result.data.priority,
            dueDate:result.data.dueDate
    })
      



    } catch(error) {
      console.log(error)

    }
  }



  useEffect(()=>{
    FetchData()
  },[])

  const dataHandler=(e)=>{

    setdata({...data,[e.target.name]:e.target.value})
    console.log(data)

  }

  const UpdateMe=async(e)=>{

     e.preventDefault()
     
      try{
         await axios.put(`http://localhost:3000/tasks/${id}`,data)

       

        nav('/tasktable')

      } catch(error){
        console.log(error)
      }

  }

  return (
   <div className="container text-center">
    <h2>Update Page</h2>

    <form onSubmit={(e)=>UpdateMe(e)}>
   

   <div className='my-4'>
    <label htmlFor="">Update Task Title</label>
    <input type="text" name='taskTitle' id='taskTitle' placeholder='update task title' value={data.taskTitle} onChange={(e)=>dataHandler(e)}/>
</div>

<div className='my-4'>
    <label htmlFor="">Update Task Description</label>
    <input type="text" name='taskDescription' id='taskDescription' placeholder='update task description' value={data.taskDescription}  onChange={(e)=>dataHandler(e)}/>
</div>
  

  <div className='my-4'>
     <label htmlFor="">Update the Status</label>
     <input type="text" name='taskStatus' id='taskStatus' placeholder='update status' value={data.taskStatus} onChange={(e)=>dataHandler(e)} />

      </div>

      <div className='my-4'>

       <label htmlFor="">Update Priorty</label>
    <input type="text" name='priority' id='priority' placeholder='update task title' value={data.priority}  onChange={(e)=>dataHandler(e)} />
</div>

<div className='my-4'>
     <label htmlFor="">Upadte Due Date</label>
    <input type="text" name='dueDate' id='dueDate' placeholder='update the date' value={data.dueDate}  onChange={(e)=>dataHandler(e)}/>
</div>

  
  <button type='Update' className='btn btn-sm bg-danger'>Update</button>


    </form>
   </div>
  )
}

export default TaskRow