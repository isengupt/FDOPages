import ReactDOM from 'react-dom'
import React from 'react'
import { Container } from 'semantic-ui-react'

import { UploadForm } from './form'

const App = () => (
  <Container text>
    <UploadForm onUpload={onUpload} />
  </Container>
)

const onUpload = file => alert(file.name)

