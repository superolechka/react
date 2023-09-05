import React from 'react';
import Progress from './Progress'; 


function App() {
  return (
    <div>
      <Progress percentage={40} />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Progress percentage={40} />
//       </div>
//     );
//   }
// }

export default App;
