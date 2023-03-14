import React, { useEffect, useState } from 'react'
import { Button } from 'components/ui'

const UpdateStatus = () => {
  const [data, setData] = useState();

  async function handleClick() {
    console.log('click')
    const response = await fetch('https://dlcjb73u3vkcwsx6do46tfnhke0kqdzr.lambda-url.eu-west-1.on.aws/')
    .then((response) => response.json())

    setData(response)
    console.log(response)
  }

  return (
    <div>
      <Button
      onClick={() => handleClick()}
      className="mr-2 mb-2"
      />{data}
    </div>
  )
}

export default UpdateStatus