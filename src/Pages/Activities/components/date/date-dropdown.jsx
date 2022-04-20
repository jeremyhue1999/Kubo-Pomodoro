import { useState } from "react"
import DateDropdownModal from "./date-dropdown-modal"
import Text from "../../../../Components/text"
import { VscChevronUp, VscChevronDown } from "react-icons/vsc"
import DateDropdownForm from "./date-dropdown-form"


const DateDropdown = () => {
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
  const firstDate = DATE_SAMPLE[0].date

  const [showDropdownModal, setShowDropdownModal] = useState(false)

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
        <DateDropdownForm />
      </div>
      
      <DateDropdownModal
        array={DATE_SAMPLE}
        showDropdownModal={showDropdownModal}
      />
    </div>
  )
}

export default DateDropdown