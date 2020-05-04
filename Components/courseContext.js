const CourseContext = React.createContext()
import courseList from "../assets/courseList"

function CourseContextProvider(props) {
  const [courseID, setCourseID] = React.useState("1004")
  const [sheetFile,setSheetFile] = React.useState("intro.md")

  const switchCourse = (id) => {
    setCourseID(id)

    //fwitch the sheetFile to the intro of that course
    const {desc} = courseList.filter(course => course.id == id)[0]
    setSheetFile(desc)
  }

  const switchSheet  = (file) => {setSheetFile(file)}

  return (
      <CourseContext.Provider value={{courseID,switchCourse,sheetFile,switchSheet}}>
          {props.children}
      </CourseContext.Provider>
  )
}


export {CourseContextProvider, CourseContext}