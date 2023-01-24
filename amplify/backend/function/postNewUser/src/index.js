var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
    
    let date = new Date();
    console.log('lambda function ran')

    if (event.request.userAttributes.sub) {
        console.log('attributes', event.request.userAttributes)
        console.log('event', event)

        let params = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                'username': {S: event.userName},
                'email': {S: event.request.userAttributes.email},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
            },
            TableName: 'User-aufzkgi345czrchokktdnaiuqu-dev'
        };

        // Call DynamoDB
        try {
            await ddb.putItem(params).promise()
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DynamoDB");
        context.done(null, event);
    }
};