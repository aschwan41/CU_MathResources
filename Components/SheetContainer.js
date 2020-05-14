import {CourseContext} from "./courseContext"
import MarkdownRender from "./MarkdownRender"

function SheetContainer(){
  const {sheetData} = React.useContext(CourseContext)
  return(
    <div className="courseSheet">
      <MarkdownRender source={sheetData}/>
    </div>
  )
}

export default SheetContainer