import {Route , Routes} from "react-router-dom"
import './App.css'
import PostPage from "./pages/PostPage"
import CreatePage from "./pages/CreatePage"
import EditPage from "./pages/EditPage"
import Home from "./pages/Home"
import Layout from "./pages/Layout"

function App() {
  

  return (
    
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="create" element={<CreatePage />} />
      <Route path="edit/:id" element={<EditPage />} />
      <Route path="post/:id" element={<PostPage />} />
      
    </Route>
   </Routes>
  )
}

export default App
