import {CourseContext} from "./courseContext"
import ReactMarkdown from "react-markdown"

function SheetContainer(){
  const {sheetFile:fileLocation} = React.useContext(CourseContext)
  const [fileString,setFileString] = React.useState('intro.md')
  React.useEffect(() => {
    fetch(`.\\chapters\\${fileLocation}`).then(response => response.text())
      .then(response => setFileString(response))
  },[fileLocation])

  return(
    <div className="courseSheet">
      <ReactMarkdown source={fileString}/>
    </div>
  )
}

export default SheetContainer