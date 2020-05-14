import Navbar from "./Navbar"
import SheetContainer from "./SheetContainer"
import Resources from "./Resources"
import {CourseContextProvider} from "./courseContext"
import ChapterSelecter from "./ChapterSelecter"

const App = () => (
    <CourseContextProvider>
      <Navbar/>
      <ChapterSelecter/>
      <SheetContainer/>
      <Resources/>
    </CourseContextProvider>
)

export default App