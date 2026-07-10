import { useContext } from "react"
import Sidebar from "./components/Sidebar/Sidebar"
import ChatSection from './components/chatSection/ChatSection.jsx'
import Separation from "./components/separation/Separation.jsx"
import { dataContext } from "./context/UserContext.jsx"

function App() {
// let data=useContext(dataContext)
// console.log(data)
  return (
    <>
      <Sidebar />
      <Separation />
      <ChatSection />
    </>
  )
}

export default App
