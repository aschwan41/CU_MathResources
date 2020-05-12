import {CourseContext} from "./courseContext"
import MarkdownRender from "./MarkdownRender"

function SheetContainer(){
  const {sheetFile:fileLocation} = React.useContext(CourseContext)
  const [fileString,setFileString] = React.useState('Loading')

  React.useEffect(() => {
    fetch(`.\\chapters\\${fileLocation}`).then(response => response.text())
      .then(response => setFileString(response))
  },[fileLocation])
  return(
    <div className="courseSheet">
      <MarkdownRender source={fileString}/>
    </div>
  )
}

export default SheetContainer