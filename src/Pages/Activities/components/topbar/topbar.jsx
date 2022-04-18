import Button from '../../../../Components/button'
import Text from '../../../../Components/text'
import DateDropdown from '../date/date-dropdown'
import GeneralSettings from '../popup-settings/GeneralSettings'
import ShareLink from '../popup-settings/ShareLink'
import SoundSettings from '../popup-settings/SoundSettings'
import TimerSettings from '../popup-settings/TimerSettings'
import { ModalProvider, ModalContext, ModalRoot } from 'react-multi-modal';
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
    }
  ]

  const [showGeneral, setShowGeneral] = useState(false)

  return (
    <div className='flex items-center justify-between h-auto w-full bg-slate-800 p-4'>
      <div className='flex items-center gap-6'>
        <Text 
          className='ml-3 text-white text-2xl'
          value='Kubo-Pomodoro'
        />
        <DateDropdown
          array={DATE_SAMPLE}
        />
      </div>
      <div className='flex gap-10'>
        <div className='flex gap-4 text-md'>
          <ModalProvider>
            <ModalContext.Consumer>
                {({ showModal, hideModal }) => (
                  <>
                    <Button 
                      className='bg-transparent text-white w-auto'
                      value='General'
                      onClick={() => setShowGeneral(true)} 
                    />
                    <Button 
                      className='bg-transparent text-white w-auto'
                      value='Timer'
                    />
                    <Button 
                      className='bg-transparent text-white w-auto'
                      value='Sound and Notifications'
                    />
                    <Button 
                      className='bg-transparent text-white w-auto'
                      value='Share Link'
                    />
                  </>
              )}
            </ModalContext.Consumer>
          </ModalProvider>
        </div>
        <Button 
          className='w-48 m-2 p-2 rounded bg-slate-400 hover:bg-slate-900 text-slate-900 hover:text-white text-md place-self-center'
          value='Sign Out'
        />
      </div>
      <GeneralSettings
        showGeneral={showGeneral} 
        onClose={() => setShowGeneral(false)}
      />
    </div>
  )
}

export default Topbar