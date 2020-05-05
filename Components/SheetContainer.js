import {CourseContext} from "./courseContext"
import ReactMarkdown from 'react-markdown';
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';

function MarkdownRender(props) {
  const newProps = {
      ...props,
      plugins: [
        RemarkMathPlugin,
      ],
      renderers: {
        ...props.renderers,
        math: (props) => 
          <MathJax.Node formula={props.value} />,
        inlineMath: (props) =>
          <MathJax.Node inline formula={props.value} />
      }
    };
    return (
      <MathJax.Provider input="tex">
          <ReactMarkdown {...newProps} />
      </MathJax.Provider>
    );
}

function SheetContainer(){
  const {sheetFile:fileLocation} = React.useContext(CourseContext)
  const [fileString,setFileString] = React.useState('intro.md')
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