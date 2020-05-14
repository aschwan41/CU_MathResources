const Dropdown = ReactBootstrap.Dropdown
import courseList from "../assets/courseList"
import {CourseContext} from "./courseContext"

function ChapterSelecter(){
  const {setSheetKey,courseData} = React.useContext(CourseContext)
  const items = courseData.chapters.map(chapter => <Dropdown.Item onClick={() => {setSheetKey(chapter.primaryKey)}} key={chapter.primaryKey}>{chapter.title}</Dropdown.Item>)
  return(
    <Dropdown>
      <Dropdown.Toggle variant="secondary" size="block" id="chapterSelecterDropDown">
        Select Chapter
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default ChapterSelecter