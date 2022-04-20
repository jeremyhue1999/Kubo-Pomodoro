import { useState } from "react"
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
  const [height, setHeight] = useState('h-0')

  const toggleModal = () => {
    if (showDropdownModal) {
      setHeight('h-0')
      setShowDropdownModal(false)
    } else {
      setHeight('h-48')
      setShowDropdownModal(true)
    }
  }

  return (
      <div className="flex items-center gap-1">
        <button 
          className='cursor-pointer flex justify-around items-center gap-2 w-56 mx-2 p-2 rounded bg-slate-100 peer hover:bg-green-300'
          onClick={toggleModal} 
        >
          <Text 
            className='text-slate-900 text-md' 
            value={firstDate}
          />
          {showDropdownModal
          ? <VscChevronUp
              className="peer"
              size={24}
            />
          : <VscChevronDown
              className="peer"
              size={24}
            />
          }
        </button>
        <DateDropdownForm />
        <ul 
          className={`fixed flex flex-col z-50 w-56 mx-2 overflow-auto text-center border border-slate-600 text-slate-900 bg-slate-100 top-20 ${height} peer-focus:${height} peer:transition ease-out duration-500`} 
        >
          {DATE_SAMPLE.map((item) => {
            return <Text
              className="w-full cursor-pointer text-md py-2 border border-slate-600 hover:border-slate-600 hover:bg-slate-600 font-semibold"
              key={item.id}
              value={item.date}
            />
          })}
        </ul>
      </div>
  )
}

export default DateDropdown