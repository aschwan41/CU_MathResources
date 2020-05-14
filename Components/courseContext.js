const CourseContext = React.createContext()
import courseList from "../assets/courseList"

const initialCourseData = {
  chapters:[{
    title:null,
    primaryKey:1,
  }]
}

function CourseContextProvider(props) {
  const [courseID, setCourseID] = React.useState()
  const [courseData,setCourseData] = React.useState(initialCourseData)
  const [sheetFile,setSheetFile] = React.useState("intro.md")
  const [sheetKey,setSheetKey] = React.useState(0)
  const [sheetData,setSheetData] = React.useState()

  React.useEffect(() => {
    if (sheetKey==0){
      return
    }else{
      console.log(sheetKey)
      fetch(`http://thomasshih.pythonanywhere.com/db/md/${sheetKey}/`).then(response => response.json()).then(data => {setSheetData(data.markdownString)})
    }
  },[sheetKey])

  React.useEffect(() => {
    setSheetData(courseData.desc)
    setSheetKey(0)
  },[courseData])

  React.useEffect(() => {
    if(courseID == undefined){
      fetch(`.\\assets\\intro.md`).then(response => response.text()).then(response => setSheetData(response))
    }else{
      const subject = courseID.slice(0,4)
      const code = courseID.slice(4,8)
      fetch(`http://thomasshih.pythonanywhere.com/db/course/${subject}/${code}/`).then(response => response.json()).then(data => {setCourseData(data)})
    }
  },[courseID])

  return (
      <CourseContext.Provider value={{courseID,setCourseID,sheetFile,setSheetKey,courseData,sheetData}}>
          {props.children}
      </CourseContext.Provider>
  )
}


export {CourseContextProvider, CourseContext}