// import React from 'react'
// import ReactDOM from 'react-dom'

// ReactDOM.render(
//     <h1>Hello React!</h1>,
//     document.getElementById('app-root'),
// )

// "dev": "webpack-dev-server --config ./config/webpack.config.js --mode development ./src/index.tsx --open --hot",
// "dev": "webpack serve --config ./config/webpack.config.js --mode development ./src/index.tsx --open --hot",

import React, { Component } from "react";
import './style.scss'
import './st.less'
import './s.css'

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
            </div>
        );
    }
}

export default App;