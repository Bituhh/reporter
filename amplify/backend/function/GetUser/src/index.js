/* Amplify Params - DO NOT EDIT
	API_REPORTER_APIID
	API_REPORTER_APINAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        message: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
