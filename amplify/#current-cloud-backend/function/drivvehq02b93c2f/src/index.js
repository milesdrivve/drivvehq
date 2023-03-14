/* Amplify Params - DO NOT EDIT
	API_DRIVVEHQ_GRAPHQLAPIENDPOINTOUTPUT
	API_DRIVVEHQ_GRAPHQLAPIIDOUTPUT
	API_DRIVVEHQ_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */const aws = require( 'aws-sdk' )
const ses = new aws.SES()

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      // pull table items from stream
      const customerFirstName =  streamedItem.dynamodb.NewImage.first_name.S
      const customerEmail =  streamedItem.dynamodb.NewImage.email.S

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: 'Welcome to DRIVVE' },
            Body: {
              Text: {
                Data: `Welcome ${customerFirstName}  to DRIVVE`
              },
            },
          },
        })
        .promise()
    }
  }
  return { status: 'done' }
}

/*exports.handler = event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};*/