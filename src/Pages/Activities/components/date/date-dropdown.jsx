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
    /* {
      id: 1323,
      date: 'September 16, 2022'
    },
    {
      id: 156,
      date: 'September 17, 2022'
    }, */
  ]
  const firstDate = DATE_SAMPLE[0].date

  const [showDropdownModal, setShowDropdownModal] = useState(false)
  const [overflow, setOverflow] = useState('overflow-hidden')
  const [height, setHeight] = useState('h-0')

  const toggleModal = () => {
    if (showDropdownModal) {
      setHeight('h-0')
      setShowDropdownModal(false)
      setOverflow('overflow-hidden')
    } else {
      if (DATE_SAMPLE.length <= 4) {
        setHeight('h-44')
        setShowDropdownModal(true)
        setOverflow('overflow-hidden')
      } else {
        setHeight('h-44')
        setShowDropdownModal(true)
        setOverflow('overflow-auto')
      }
    }
  }

  return (
      <div className="flex items-center gap-1">
        <button 
          className='cursor-pointer flex justify-around items-center gap-2 w-56 mx-2 p-2 rounded bg-slate-100 peer'
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
        </button>
        <DateDropdownForm />
        <ul 
          className={`absolute flex flex-col z-50 w-56 mx-2 text-center border border-red-900 text-slate-900 bg-white top-20 ${height} peer-focus:${height} peer:transition ease-out duration-500 ${overflow}`} 
        >
          {DATE_SAMPLE.map((item) => {
            return <Text
              className="w-full h-full cursor-pointer text-md py-2 border border-red-900 hover:border-red-300 hover:bg-red-300 font-semibold"
              key={item.id}
              value={item.date}
              onClick={toggleModal}
            />
          })}
        </ul>
      </div>
  )
}

export default DateDropdown