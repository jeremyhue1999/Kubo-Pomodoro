import Text from "../../../../Components/text"

const DoingSubtask = ({
  value
}) => {
  return (
    <div className="flex justify-between items-center my-4 border border-slate-800 border-b-white pb-1">
      <div className="flex gap-2 mt-2">
      <Text
        className='text-white text-lg mr-2'
        value={value}
      />
      </div>
      <Text
        className="text-white text-xl" 
        value="15:00"
      />
    </div>
  )
}

export default DoingSubtask