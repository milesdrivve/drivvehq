import React from 'react'

/** automations
 *  1. if NEW,
 *    - if missing documents
 *        -> set status = 'documents pending'
 *        -> trigger email
 *    - if salary < 14K
 *        -> set status = 'declined'
 *        -> trigger email
 *    - else
 *        -> set status = 'under saml review'
 *        -> trigger email 'welcome'
 *        -> trigger 'under saml review'
 *        -> trigger 'saml review' + attach documents
 *
 *  2. if UNDER SAML REVIEW
 *    - if declined
 *        -> set status = 'saml declined'
 *        -> trigger email
 *    else
 *        -> set status = 'saml approved'
 *        -> trigger email
 *
 *  3. if SAML APPROVED
 *    - if customer approved
 *        -> set status = 'customer approved'
 *        -> trigger SAML email
 *    - if customer declined
 *        -> set status = 'customer approved'
 *        -> trigger customer email -> thank you ?
 *
 *  4. if CUSTOMER APPROVED
 *    -> trigger email
 *        -> customer -> car request with supplier
 *        -> saml -> customer approved
 *
 *  5. if BOOKED
 *    -> trigger
 *        -> customer -> collecting car
 *
 */

/*
* NEED THE ENTIRE CUSTOMER RECORD !!!
*/
export const triggerUpdate = (customer_id, status) => {
  console.log('triggerUpdate')
  console.log(customer_id)
  console.log(status)

  if (status.toUpperCase() === 'NEW') {
    const salary = checkSalary()
    const documents = checkDocuments()

    if (salary === false) {
      //updateStatus('DECLINED')
      //sendEmail('DECLINED', 'BODY')

    } else if (documents === false) {
      //updateStatus('DOCUMENTS PENDING')
      //sendEmail('DOCUMENTS PENDING', 'BODY')

    } else if (salary === true && documents === true) {
      //updateStatus('UNDER SAML REVIEW')
      //sendEmail('UNDER SAML REVIEW', 'BODY')
    }

  } else if (status.toUpperCase() === 'SAML APPROVED') {
    //updateStatus('SAML APPROVED')
    //sendEmail('APPROVED', 'BODY')

  } else if (status.toUpperCase() === 'SAML DECLINED') {
    //updateStatus('SAML DECLINED')
    //sendEmail('DECLINED', 'BODY')

  } else if (status.toUpperCase() === 'CUSTOMER APPROVED') {
    //updateStatus('CUSTOMER APPROVED')
    //sendEmail('CUSTOMER APPROVED')
    //sendEmail('CAR REQUEST WITH SUPPLIER', 'BODY')

  } else if (status.toUpperCase() === 'CUSTOMER DECLINED') {
    //updateStatus('CUSTOMER DECLINED')

  } else if (status.toUpperCase() === 'CAR BOOKED') {
    //updateStatus('CUSTOMER COLLECTING CAR')
    //sendEmail('COLLECTION DETAILS', 'BODY')
  }
}

const checkSalary = () => {
  const resp = true;
  return resp
}

const checkDocuments = () => {
  const resp = true;
  return resp
}

const updateStatus = (status) => {
    // update status
    // call API/datastore

    // send sendEmail
    const emailTitle = ''
    const emailBody = ''
    // sendEmail((emailTitle, emailBody))
}

const sendEmail = (emailTitle, emailBody) => {
  // call API
}

/* IF URL RECEIVED TO UPDATE STATUS */
