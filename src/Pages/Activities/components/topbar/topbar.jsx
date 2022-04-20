import Button from '../../../../Components/button'
import Text from '../../../../Components/text'
import DateDropdown from '../date/date-dropdown'
import GeneralSettings from '../popup-settings/GeneralSettings'
import ShareLink from '../popup-settings/ShareLink'
import SoundSettings from '../popup-settings/SoundSettings'
import TimerSettings from '../popup-settings/TimerSettings'
import LogoDark from '../../../../images/logo-dark'
import { useState } from 'react'

const Topbar = () => {
  const DATE_SAMPLE = [
    {
      id: 123,
      date: 'September 12, 2022'
    },
    {
      id: 13,
      date: 'September 13, 2022'
    },
    {
      id: 1232,
      date: 'September 14, 2022'
    },
    {
      id: 1238,
      date: 'September 15, 2022'
    },
    {
      id: 1323,
      date: 'September 16, 2022'
    },
    {
      id: 156,
      date: 'September 17, 2022'
    },
  ]

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
        <DateDropdown
          array={DATE_SAMPLE}
        />
      </div>
      <div className='flex gap-8'>
        <div className='flex gap-4 text-md'>
          <Button 
            className='bg-transparent text-white w-auto'
            value='General'
            onClick={() => setShowGeneral(true)} 
          />
          <Button 
            className='bg-transparent text-white w-auto'
            value='Timer' 
            onClick={() => setShowTimer(true)} 
          />
          <Button 
            className='bg-transparent text-white w-auto'
            value='Sound and Notifications' 
            onClick={() => setShowSounds(true)} 
          />
          <Button 
            className='bg-transparent text-white w-auto'
            value='Share Link' 
            onClick={() => setShowShareLink(true)} 
          />
        </div>
        <Button 
          className='w-48 m-2 p-2 rounded bg-slate-400 text-slate-900 hover:bg-slate-300 text-md place-self-center'
          value='Sign Out'
        />
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