import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'

const SendEmail = () => {
  const [base64, setBase64] = useState("")
  const onChange = (e) => {
    const files = e.target.files
    const file = files[0]
    getBase64(file)
  }
  const onLoad = (fileString) => {
    setBase64(fileString)
  }
  const getBase64 = (file) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      onLoad(reader.result)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://ocxbxxb62c.execute-api.eu-west-1.amazonaws.com/sendEmail", {
      mode: "no-cors",
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin' : '*',
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderName: "bookings@drivve.co.za",
        sendderEmail: "bookings@drivve.co.za",
        message: "Hello team, this is just a test email send from react and lambda",
        base64Data: base64,
        date: new Date(),
        fileName: "TEST_FILE_NAME",
      }),
    })
  }
  return (
    <div>
      <form>
        <input type="file" accept="application/pdf" onChange={onChange} />
      </form>
      <button onClick={handleSubmit}>Send to Lambba</button>
    </div>
  )
}

export default  SendEmail