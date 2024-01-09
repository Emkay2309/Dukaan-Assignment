import './index.css'
import Navbar from '../src/components/Navbar'
import Content from './components/Content'

function App() {
  return (
    <div className='flex '>
      <Navbar/>
      <div className='bg-[#fafafa]'>
      <Content/>
      </div>
    </div>
  )
}
export default App
