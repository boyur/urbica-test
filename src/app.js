import React from 'react'
import {render} from 'react-dom'
import myData from './db.json'
import App from './components/App'

import 'normalize.css'
import './css/app.css'

render(<App data={myData.features}/>, document.getElementById('container'));