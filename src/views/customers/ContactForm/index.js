import React, { forwardRef, useState } from 'react'
import { Button, Input, toast, Notification } from 'components/ui'

import { API } from 'aws-amplify';
import { createCandidate } from 'graphql/mutations'

const ContactForm = ({ initialRef, onClose }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  })

  const handleContactFormSubmit = async (e) => {
    e.preventDefault()
    const { name, email } = formState
    if (name && email) {
      try {
        // TODO: Add code to send email here
        console.log('<send to backend here>')
        console.log(name +','+ email)

        await API.graphql({
          query: createCandidate,
          variables: {
            input: {
              name, email
            }
          }
        })

        toast.push(
          <Notification
              title={'Successfuly added'}
              type="success"
              duration={2500}
          >
              Candidate successfuly added
          </Notification>,
          {
              placement: 'top-center',
          }
        )
      } catch (e) {
        toast.push(
          <Notification
              title={'Error'}
              type="error"
              duration={2500}
          >
              Error
          </Notification>,
          {
              placement: 'top-center',
          }
        )
      }
    } else {
      toast.push(
        <Notification
            title={'Other error'}
            type="error"
            duration={2500}
        >
            Another error
        </Notification>,
        {
            placement: 'top-center',
        }
      )
    }
  }

  return (
    <>
      <form onSubmit={handleContactFormSubmit}>
            <h2>Candidate Name</h2>
            <Input
              ref={initialRef}
              placeholder="name"
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
            />
            <h2>Email</h2>
            <Input
              placeholder="email"
              type="email"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />
          <Button colorScheme="blue" mr={3} type="submit">
            Send
          </Button>
          <Button onClick={onClose}>Cancel</Button>
      </form>
    </>
  )
}

export default ContactForm