import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TaskTable = () => {

const [data,setadata] = useState([])

const fetchInfo=async()=>{

    try{


      const result =  await axios.get('http://localhost:3000/tasks')

        setadata(result.data)

    } catch(err) {
        console.log(err)
    }
    

}

useEffect(()=>{
    fetchInfo()
})

const dataDelete=async(id)=>{
   

    try{

          const result = data.filter((val)=>val.id!==id)
          await axios.delete(`http://localhost:3000/tasks/${id}`)

          setadata(result)

       

    } catch(err) {

    }
}



  return (
    <>

    <table className='table fw-bold'>

        <thead >

          <tr>

               <td>ID</td>
               <td>Task Title</td>
               <td>Task Description</td>
               <td>Task Status</td>
               <td>Priority</td>
               <td>Due Date</td>
               <td>Action</td>
               <td>Action</td>



          </tr>



        </thead>

        <tbody>

            {
                data.map((val,index)=>{
                    return(
                        <tr key={val.id}>
                           
                           <>
                            <td>{val.id}</td>
                            <td>{val.taskTitle}</td>
                            <td>{val.taskDescription}</td>
                            <td>{val.taskStatus}</td>
                            <td>{val.priority}</td>
                            <td>{val.dueDate}</td>
                            <td><i className='fa fa-trash text-dark' onClick={()=>window.confirm("Are You Sure?") ? dataDelete(val.id): null}></i></td>
                            <td><Link to={`/taskrow/${val.id}`}><i className='fa fa-edit text-success'></i></Link></td>
                           
                           
                           
                           </>




                        </tr>
                    )
                })
            }





        </tbody>


    </table>
    
    
    </>
  )
}

export default TaskTable