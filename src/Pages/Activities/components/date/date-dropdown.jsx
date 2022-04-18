import DateDropdownModal from "./date-dropdown-modal"
import Text from "../../../../Components/text"
import { useState } from "react"

const DateDropdown = ({
  className,
  array = []
  
}) => {
  const [showDropdownModal, setShowDropdownModal] = useState(false)
  const firstDate = array[0].date

  const toggleModal = () => {
    if (showDropdownModal) {
      setShowDropdownModal(false)
    } else {
      setShowDropdownModal(true)
    }
  }

  return (
    <div>
      <div 
        className={`${className} cursor-pointer w-56 mx-2 p-2 flex items-center justify-center rounded bg-slate-100`}
        onClick={toggleModal} 
      >
        <Text 
          className='text-slate-900 text-xl' 
          value={firstDate}
        />
      </div>
      <DateDropdownModal
        array={array}
        showDropdownModal={showDropdownModal}
      />
    </div>
    
  )
}

export default DateDropdown