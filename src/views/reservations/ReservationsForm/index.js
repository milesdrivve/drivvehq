import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ReservationsForm = () => (
  <div>
    <h1>New Reservation</h1>
    <Formik
      initialValues={{
        customersID: '',
        pickupDate: '',
        returnDate: '',
        pickupLocation: '',
        status: '',
        ReservationCars: '',
        ReservationPrices: '',
      }}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="customersID"></label>
          <Field name="customersID" placeholder="Customer id" />

          <label htmlFor="pickupDate">22-01-2023 12:00</label>
          <Field name="pickupDate" placeholder="Pickup date" />

          <label htmlFor="returnDate">22-06-2023 12:00</label>
          <Field name="returnDate" placeholder="Return date" />

          <label htmlFor="pickupLocation">Cape Town</label>
          <Field name="pickupLocation" placeholder="Location" />

          <label htmlFor="status">1</label>
          <Field name="status" placeholder="1" />

          <label htmlFor="ReservationCars">1</label>
          <Field name="ReservationCars" placeholder="Car" />

          <label htmlFor="ReservationPrices">1</label>
          <Field name="ReservationPrices" placeholder="Price" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ReservationsForm