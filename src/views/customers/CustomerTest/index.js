import React, { useEffect, forwardRef, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'

import { createCustomers } from 'graphql/mutations';
import { listCustomers } from 'graphql/queries';

import awsExports from 'aws-exports'

Amplify.configure(awsExports);

const initialState = { first_name:'', last_name:'' }

const CustomerTest = () => {
  const [formState, setFormState] = useState(initialState)
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    fetchCustomers()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchCustomers() {
    try {
      const customerData = await API.graphql(graphqlOperation(listCustomers))
      const customers = customerData.data.listCustomers.items
      setCustomers(customers)
    } catch (err) { console.log('error fetching customers') }
  }

  async function addCustomer() {
    try {
      if (!formState.first_name || !formState.last_name) return
      const customer = { ...formState }
      setCustomers([...customers, customer])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createCustomers, {input: customer}))
    } catch (err) {
      console.log('error creating customer:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Customers</h2>
      <input
        onChange={event => setInput('first_name', event.target.value)}
        style={styles.input}
        value={formState.first_name}
        placeholder="First Name"
      />
      <input
        onChange={event => setInput('last_name', event.target.value)}
        style={styles.input}
        value={formState.last_name}
        placeholder="Last Name"
      />
      <button style={styles.button} onClick={addCustomer}>Add</button>
      {
        customers.map((customer, index) => (
          <div key={customer.id ? customer.id : index}>
            <p>{customer.first_name}</p>
            <p>{customer.last_name}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
}

export default CustomerTest