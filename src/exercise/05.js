// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Exercise

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// const smallBox = (
//   <div
//     className="box box--small"
//     style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{backgroundColor: 'pink', fontStyle: 'italic'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{backgroundColor: 'orange', fontStyle: 'italic'}}
//   >
//     large orange box
//   </div>
// )

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// export default App

// ---

// Extra Credit 1
// const Box = ({className = '', style, ...children}) => (
//   <div
//     className={`box ${className}`.trim()}
//     style={{fontStyle: 'italic', ...style}}
//     {...children}
//   />
// )

// function App() {
//   return (
//     <div>
//       <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//         small lightblue box EC1
//       </Box>
//       <Box className="box--medium" style={{backgroundColor: 'pink'}}>
//         medium pink box EC1
//       </Box>
//       <Box className="box--large" style={{backgroundColor: 'orange'}}>
//         large orange box EC1
//       </Box>
//       <Box>sizeless box</Box>
//     </div>
//   )
// }

// export default App

// ---

// Extra Credit 2
const Box = ({size, style, className = '', ...children}) => {
  const sizeClassName = size ? `box--${size}` : ``
  return (
    <div
      style={{fontStyle: 'italic', ...style}}
      className={`box ${sizeClassName} ${className}`.trim()}
      {...children}
    />
  )
}

function App() {
  return (
    <div>
      <Box
        size="small"
        style={{backgroundColor: 'lightblue'}}
        className="underline"
      >
        small lightblue box EC2
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box EC2
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box EC2
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
