import React from 'react'
import {render} from 'react-dom'
import App from './components/App'

import 'normalize.css'

fetch('http://localhost:3030/features')
  .then(res => res.json())
  .then(data =>
    render(<App data={data.features}/>, document.getElementById('container'))
  );