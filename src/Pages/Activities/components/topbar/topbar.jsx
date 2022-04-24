import { useState } from 'react'
import Button from '../../../../Components/button'
import Text from '../../../../Components/text'
import DateDropdown from '../date/date-dropdown'
import LogoDark from '../../../../images/logo-dark'
import GeneralSettings from '../popup-settings/GeneralSettings'
import ShareLink from '../popup-settings/ShareLink'
import SoundSettings from '../popup-settings/SoundSettings'
import TimerSettings from '../popup-settings/TimerSettings'

const Topbar = () => {
  const [showGeneral, setShowGeneral] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [showSounds, setShowSounds] = useState(false)
  const [showShareLink, setShowShareLink] = useState(false)

  return (
    <div className='flex items-center justify-between h-auto w-full bg-slate-800 p-2'>
      <div className='flex items-center gap-6'>
        <span className='ml-4 w-40'>
          <LogoDark />
        </span>
        <DateDropdown />
      </div>
      <div className='flex gap-4 text-md'>
        <Button 
          className='bg-transparent text-white w-auto'
          onClick={() => setShowGeneral(true)} 
        >
          <Text value='General'/>
        </Button>
        <Button 
          className='bg-transparent text-white w-auto' 
          onClick={() => setShowTimer(true)} 
        >
          <Text value='Timer' />
        </Button>
        <Button 
          className='bg-transparent text-white w-auto'
          onClick={() => setShowSounds(true)} 
        >
          <Text value='Sound and Notifications'/>
        </Button>
        <Button 
          className='bg-transparent text-white w-auto'
          onClick={() => setShowShareLink(true)} 
        >
          <Text value='Share Link'/>
        </Button>
        <Button 
          className='w-48 m-2 p-2 rounded bg-slate-400 text-slate-900 hover:bg-slate-300 text-md place-self-center'
        >
          <Text value='Sign Out'/>
        </Button>
      </div>
      <GeneralSettings
        showGeneral={showGeneral} 
        onClose={() => setShowGeneral(false)}
      />
      <TimerSettings
        showTimer={showTimer}
        onClose={() => setShowTimer(false)}
      />
      <ShareLink
        showShareLink={showShareLink}
        onClose={() => setShowShareLink(false)}
      />
      <SoundSettings
        showSounds={showSounds}
        onClose={() => setShowSounds(false)}
      />
    </div>
  )
}

export default Topbar