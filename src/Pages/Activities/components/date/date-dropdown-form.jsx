import { useState } from "react"
import { BsCalendarPlus } from "react-icons/bs"
import Button from "../../../../Components/button"
import Input from "../../../../Components/input"

const DateDropdownForm = () => {
  
  const array = []
  
  const [inputType, setInputType]= useState('hidden')
  const [formDisplay, setFormDisplay]= useState('hidden')

  const submitHandler = e => {
    e.preventDefault()
    array.push(e.target.date.value)
    setInputType('hidden')
    setFormDisplay('hidden')
  }

  return (
    <div className="flex items-center gap-3">
      <BsCalendarPlus 
        className="cursor-pointer fill-white hover:fill-gray-300"
        size={30}
        onClick={() => {
          if (inputType === 'date') {
            setInputType('hidden')
            setFormDisplay('hidden')
          } else {
            setInputType('date')
            setFormDisplay('block')
          }
        }}
      />
      <form className="flex gap-2" onSubmit={submitHandler}>
        <Input
          className="w-60" 
          type={inputType}
          name='date'
        />
        <Button
          className={`${formDisplay} rounded` }
          type="submit"
          value="submit"
        />
      </form>
    </div>
  )
}

export default DateDropdownForm