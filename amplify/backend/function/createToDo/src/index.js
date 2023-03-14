const aws = require( 'aws-sdk' )
const ses = new aws.SES()

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
/*exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);

    const name =  'miles test' //record.dynamodb.NewImage.name.S
    const description =  'does this work' //record.dynamodb.NewImage.description.S

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
                Data: `Welcome ${name} ${description} to DRIVVE`
              },
            },
          },
        })
        .promise()
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};*/

exports.handler = event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  }

  return Promise.resolve('Successfully processed DynamoDB record');
};