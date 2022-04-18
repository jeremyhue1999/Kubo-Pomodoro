import Text from "../../../../Components/text"

const DateDropdownModal = ({ 
  showDropdownModal,
  array
}) => {

  if (!showDropdownModal) {
    return null
  }

  return (
    <ul 
      className="fixed flex flex-col z-50 w-56 mx-2 h-auto text-center border border-slate-600 text-slate-900 bg-slate-100" 
    >
      {array.map((item) => {
        return <Text
          className="w-full cursor-pointer text-md py-2 border border-slate-600 hover:border-slate-600 hover:bg-slate-600 font-semibold"
          key={item.id}
          value={item.date}
        />
      })}
    </ul>
  )
}

export default DateDropdownModal