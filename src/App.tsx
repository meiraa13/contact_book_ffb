import { UserProvider } from "./providers/UserContext"
import { MainRoutes } from "./routes"


function App() {
  

  return (
    <>
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </>
  )
}

export default App
