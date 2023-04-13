import React from 'react'
import { FileUploader } from '@aws-amplify/ui-react'

const Storage = () => {
  return (
    <>
      <div className="mb-8">
          `<h3 className="mb-1">Storage</h3>
          <FileUploader
            accessLevel='public'
            acceptedFileTypes={['image/*']}
            variation='drop'
          />
      </div>`
    </>
  )
}

