import React from 'react'
import {render} from 'react-dom'
import myData from './db'
import App from './components/App'

import 'normalize.css'

const data = myData();

render(<App data={data.features}/>, document.getElementById('container'));