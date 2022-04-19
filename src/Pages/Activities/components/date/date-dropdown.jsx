import DateDropdownModal from "./date-dropdown-modal"
import Text from "../../../../Components/text"
import { BsCalendarPlus } from "react-icons/bs"
import { VscChevronUp, VscChevronDown } from "react-icons/vsc"
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
      <div className="flex items-center gap-1">
        <div 
          className='cursor-pointer flex justify-around items-center gap-2 w-56 mx-2 p-2 rounded bg-slate-100'
          onClick={toggleModal} 
        >
          <Text 
            className='text-slate-900 text-md' 
            value={firstDate}
          />
          {showDropdownModal
          ? <VscChevronUp
              size={24}
            />
          : <VscChevronDown
              size={24}
            />
          }
        </div>
        <BsCalendarPlus 
          className="cursor-pointer fill-white hover:fill-gray-300"
          size={30}
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