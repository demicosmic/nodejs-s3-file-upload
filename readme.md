1. Create bucket
  - https://s3.console.aws.amazon.com/s3/home

2. Create policy
  - https://console.aws.amazon.com/iam/home

3. Create IAM user and set the policy to that user
  - https://console.aws.amazon.com/iam/home?#/users

4. Get AccessKeyID & Secret Access Key (*** DO NOT COMMIT ***)

5. npm install --save aws-sdk

** https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html


6. SET BUCKET PERMISSION (CORS)
  <!-- Sample policy -->
  <CORSConfiguration>
    <CORSRule>
      <AllowedOrigin>*</AllowedOrigin>
      <AllowedMethod>GET</AllowedMethod>
      <MaxAgeSeconds>3000</MaxAgeSeconds>
      <AllowedHeader>Authorization</AllowedHeader>
    </CORSRule>
    
    <CORSRule>
      <AllowedOrigin>*</AllowedOrigin>
      <AllowedMethod>PUT</AllowedMethod>
      <MaxAgeSeconds>3000</MaxAgeSeconds>
      <AllowedHeader>*</AllowedHeader>
    </CORSRule>
  </CORSConfiguration>
