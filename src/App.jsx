import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import TaskForm from './Components/TaskForm'
import TaskTable from './Components/TaskTable'
import TaskRow from './Components/TaskRow'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>

    <Router>

     <Navbar/>

      
   <Routes>

    <Route path='/' element={<TaskForm/>}/>
    <Route  path='/tasktable' element={<TaskTable/>}/>
    <Route path='/taskrow/:id' element={<TaskRow/>}/>
    <Route path='*' element={<TaskForm/>}/>

   </Routes>

    </Router>
    
    </>
  )
}

export default App