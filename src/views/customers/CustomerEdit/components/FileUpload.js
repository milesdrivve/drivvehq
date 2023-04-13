import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Storage } from 'aws-amplify'
import { S3ProviderListOutputItem } from '@aws-amplify/storage'
import { FileUploader, Collection } from '@aws-amplify/ui-react'
import useThemeClass from 'utils/hooks/useThemeClass'
import { ImGift } from 'react-icons/im'

const FileUpload = () => {
  const [message, setMessage] = React.useState('');
  const onError = (error) => {
    setMessage(`${error}`);
  };
  const onSuccess = ({ key }) => {
    setMessage(`Key: ${key}`);
  };

  const [imageKeys, setImageKeys] = useState([])
  const [images, setImages] = useState([])

  const fetchImages = async () => {
    const { results } = await Storage.list("", { level: "public" })
    setImageKeys(results)
    const s3Images = await Promise.all(
      results.map(
        async image => await Storage.get(image.key, { level: "public" })
      )
    )
    setImages(s3Images)
  }

  useEffect(() => {
    fetchImages();
  }, [])

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
      <Collection
        items={images}
        type="grid"
        padding="2rem"
        maxwidth="1100px"
        margin="0 auto"
        justifyContent="center"
        gap="small"
      >
        {(item, index) => (
          <>
            <h1>{item}</h1>
            <h2>{index}</h2>
          </>
        )}
      </Collection>
    </>
  )
}

export default FileUpload