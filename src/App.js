import React, { Component } from 'react';
import './styles/styles.css'

import Calculator from './layout/Calculator/Calculator'

class App extends Component {
  

  render () {
    return (
      <div className="app">
          <Calculator/>        
      </div>
    );
  }
}

export default App;








































// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       result: ""
//     }
//   }

//   onClick = button => {
//     if(button === "=") {
//       this.calculate()
//     }

//     else if(button === "C"){
//       this.reset()
//     }

//     else if(button === "CE"){
//       this.backspace()
//   }

//     else {
//       this.setState({
//         result: this.state.result + button
//       })
//     }
//   };

//   calculate = () => {
//     var checkResult = ''
//     if(this.state.result.includes('--')){
//         checkResult = this.state.result.replace('--','+')
//     }

//     else {
//         checkResult = this.state.result
//     }

//     try {
//       this.setState({
//         result: (eval(checkResult) || "") + ""
//       })
//     } catch (e) {
//       this.setState({
//         result: "error"
//       })

//     }
//   };

//   reset = () => {
//     this.setState({
//       result: ""
//     })
//   };

//   backspace = () => {
//     this.setState({
//       result:this.setState.result.slice(0, -1)
//     })
//   }

//   render () {
//     return (
//       <div className="app">
//         <div className="cal-body">
//           <h1>Slick Calculator</h1>
//           <ResultComponent result={this.state.result}/>
//           <KeyComponent onClick={this.onclick}/>
//         </div>
        
//       </div>
//     );
//   }
// }

// export default App;
