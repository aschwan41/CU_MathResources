import courseList from "../assets/courseList"
import {CourseContext} from "./courseContext"

function CourseButton({data}){
  const {courseID,switchCourse} = React.useContext(CourseContext)
  return(
    <div>
      <button onClick={() => switchCourse(data.id)}
              className={`courseName ${data.id == courseID? "is-active":""}`}>
        {data.courseCode}
      </button>
    </div>
  )
}

function Navbar(){
  const [active,setActive] = React.useState(false)
  const toggleNavbar = () => {setActive(currentlyActive => !currentlyActive)}

  const courses = courseList.map(courseInfo => <CourseButton key={courseInfo.id} data={courseInfo}/>)

  return(
    <div className={`Navbar ${active? "is-active":""}`}>
      <button onClick={toggleNavbar} className={`hamburger ${active? "is-active":""}`}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      {active? courses : ""}
    </div>
  )
}

export default Navbar