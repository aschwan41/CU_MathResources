const Dropdown = ReactBootstrap.Dropdown
import courseList from "../assets/courseList"
import {CourseContext} from "./courseContext"

function ChapterSelecter(){
  const {courseID,sheetFile,switchSheet} = React.useContext(CourseContext)
  //get the course that the user wants
  const {chapters} = courseList.filter(course => course.id == courseID)[0]

  const items = chapters.map(({title,file},index) => <Dropdown.Item onClick={() => {switchSheet(file)}} key={index}>{title}</Dropdown.Item>)

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