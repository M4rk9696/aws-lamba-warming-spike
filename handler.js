'use strict';

module.exports.hello = async (event) => {
  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUP - Lambda is warm!')
    return callback(null, 'Lambda is warm!')
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello Mark',
      input: event,
    }),
  };
};
