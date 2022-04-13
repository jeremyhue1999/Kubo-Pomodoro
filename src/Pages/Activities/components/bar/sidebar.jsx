import { Calendar } from 'react-calendar'
import Button from '../../../../Components/button'
import Text from '../../../../Components/text'
import 'react-calendar/dist/Calendar.css'
import { render } from "react-dom";
import Login from '../../../../login_components/Login'


const Sidebar = () => {
  const handleSignOut = () => { 
    render(<Login />, document.getElementById('root'))
  }
  return (
    <div className='w-96 h-full px-6 bg-slate-800'>
      <div className='flex justify-center items-center p-3'>
        <img className="logo object-cover w-40 h-fit" src={require("..//..//..//..//images/logo-dark.png")} alt="logo-dark"></img>
      </div>
      <div className='flex flex-col items-center gap-32 h-full'>
        <Calendar 
          className='w-80 rounded'
          
        />
        <div className='flex flex-col gap-7'>
          <Button 
            className='bg-transparent text-white text-xl'
            value='General'
          />
          <Button 
            className='bg-transparent text-white text-xl'
            value='Timer'
          />
          <Button 
            className='bg-transparent text-white text-xl'
            value='Sound and Notifications'
          />
          <Button 
            className='bg-transparent text-white text-xl'
            value='Share Link'
          />
        </div>
        <Button 
          className='w-48 p-2 rounded bg-slate-400 hover:bg-slate-900 text-slate-900 hover:text-white text-md'
          value='Sign Out' onClick={handleSignOut}
        />
      </div>
    </div>
  )
}

export default Sidebar