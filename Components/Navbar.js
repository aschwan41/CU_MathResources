import {CourseContext} from "./courseContext"

function CourseButton({data,callback}){
  const {courseID,setCourseID} = React.useContext(CourseContext)
  const id = `${data.subject}${data.code}`
  return(
    <div>
      <button onClick={() => {
        setCourseID(id)
        callback()
      }}
              className={`courseName ${id == courseID? "is-active":""}`}>
        {id}
      </button>
    </div>
  )
}

function Navbar(){
  const [active,setActive] = React.useState(false)
  const toggleNavbar = () => {setActive(currentlyActive => !currentlyActive)}
  const [data,setData] = React.useState([])
  const [courses,setCourses] = React.useState([])

  React.useEffect(() => {
    fetch("http://thomasshih.pythonanywhere.com/db/").then(response => response.json()).then(data => {setData(data)})
  },[])

  React.useEffect(() => {
    setCourses(data.map(courseInfo => <CourseButton key={courseInfo.code} data={courseInfo} callback={toggleNavbar}/>))
  },[data])

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