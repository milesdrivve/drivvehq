import React, { useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FileUploader } from '@aws-amplify/ui-react';
import useThemeClass from 'utils/hooks/useThemeClass'

const FileUpload = () => {
  const [message, setMessage] = React.useState('');
  const onError = (error) => {
    setMessage(`${error}`);
  };
  const onSuccess = ({ key }) => {
    setMessage(`Key: ${key}`);
  };

  return (
    <>
      <div>file upload</div>

      <FileUploader
        onSuccess={onSuccess}
        onError={onError}
        isPreviewerVisible={true}
        acceptedFileTypes={['.gif', '.doc', '.jpeg', '.jpg','.png']}
        accessLevel="public"
      />
    </>
  )
}

export default FileUpload