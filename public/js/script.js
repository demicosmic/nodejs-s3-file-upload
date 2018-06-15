const avatar = document.getElementById('avatar')

const form = document.getElementById('form')
form.onsubmit = async (event) => {
  event.preventDefault()

  // file validation
  const file = avatar.files[0]
  console.log(file)

  if (!file) {
    alert('No file selected!')
    return
  }

  // upload
  let uploadConfig = await getUploadConfig()
  console.log(uploadConfig.data.url)

  axios.put(uploadConfig.data.url, file, {
    headers: {
      'Content-Type': file.type
    }
  }).then((res) => {
    console.log('IMAGE URL: ', uploadConfig.data.key)
    console.log('To save this image to database, send IMAGE URL to server...')
  })
}

const getUploadConfig = async() => {
  let uploadConfig = await axios.get('/upload')
  return uploadConfig
}