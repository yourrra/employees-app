import { createBrowserRouter } from 'react-router-dom'
import { Paths } from './paths'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { Employees } from './pages/employees'
import { AddEmployee } from './pages/addEmployee'
import { Status } from './pages/status'
import { Employee } from './pages/employee'
import { EditEmployee } from './pages/editEmployee'

export const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Employees />,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
  {
    path: Paths.employeeAdd,
    element: <AddEmployee />,
  },
  {
    path: `${Paths.status}/:status`,
    element: <Status />,
  },
  {
    path: `${Paths.employee}/:id`,
    element: <Employee />,
  },
  {
    path: `${Paths.employeeEdit}/:id`,
    element: <EditEmployee />,
  },
])
