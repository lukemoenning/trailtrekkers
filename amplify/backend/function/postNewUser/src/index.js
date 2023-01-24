const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
    
    const date = new Date();

    if (event.request.userAttributes.sub) {
        console.log('Event: ', event)

        const newUser = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                'username': {S: event.userName},
                'email': {S: event.request.userAttributes.email},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
            },
            TableName: 'User-aufzkgi345czrchokktdnaiuqu-dev'
        };

        // Try to place the new user in the database
        try {
            await ddb.putItem(newUser).promise()
            console.log("New user created in database");
        } catch (error) {
            console.log("Error: ", error);
        }

        context.done(null, event);

    } else {
        console.log("Error passing user from cognito");
        context.done(null, event);
    }
};