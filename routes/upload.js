const AWS = require('aws-sdk')
const s3Keys = require('../config').s3Keys
const uuid = require('uuid/v1')

const s3 = new AWS.S3(s3Keys)
/*
  s3.getSignedUrl(
    operationName,
    params //(Bucket, Key, ContentType)
  )
*/
module.exports = app => {
  app.get('/upload', (req, res) => {

    // *** ADD MIDDLEWARE THAT CHECKS IF USER IS LOGGED IN...

    // rename file
    const FOLDER_NAME = 'sample'
    const key = `${uuid()}.jpeg`

    s3.getSignedUrl('putObject', {
      Bucket: 'demicosmic-s3-upload',
      ContentType: 'image/jpeg',
      Key: key
    }, (err, url) => {
      res.send({
        key,
        url
      })
    })
  })
}