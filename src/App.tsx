import { UserProvider } from "./providers/UserContext"
import { MainRoutes } from "./routes"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"


function App() {
  

  return (
    <>
      <UserProvider>
        <MainRoutes />
      </UserProvider>
      <ToastContainer
       position="top-right"
       autoClose={3000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark" 
       />

    </>
  )
}

export default App
