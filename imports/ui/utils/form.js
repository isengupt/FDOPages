import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

import { useFileDrop } from './hooks'

export const UploadForm = ({ onUpload }) => {
  const { DropBox, HiddenInput, onClick, drag } = useFileDrop(onUpload)
  return (
    <Segment placeholder>
      <HiddenInput />
      <DropBox className={`upload-box ${drag ? 'drag' : ''}`}>
        <div>Drag and drop files to upload.</div>
      </DropBox>
      <Button primary onClick={onClick}>
        Upload file
      </Button>
    </Segment>
  )
}