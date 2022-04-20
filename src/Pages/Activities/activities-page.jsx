import Swimlanes from "./components/swimlane/swimlanes"
import Topbar from "./components/topbar/topbar"

const ActivitiesPage = () => {

  return (
    <div className='flex flex-col'>
      <Topbar />
      <Swimlanes />
    </div>
  )
}

export default ActivitiesPage
