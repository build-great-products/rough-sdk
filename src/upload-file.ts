import * as tus from 'tus-js-client'

type UploadFileOptions = {
  tusServerUrl?: string
  uploadToken: string
  data: File | Buffer
  fileName: string
  mimeType: string
}

const uploadFile = (options: UploadFileOptions) => {
  const {
    tusServerUrl = 'https://tus.rough.app/files/',
    uploadToken,
    data,
    fileName,
    mimeType,
  } = options

  // tus-js-client supports Buffer, but the types are not correct
  // see https://github.com/tus/tus-js-client/issues/289
  const file = data as File

  return new Promise((resolve, reject) => {
    const upload = new tus.Upload(file, {
      endpoint: tusServerUrl,
      retryDelays: [0, 500, 750, 1000, 2000],
      metadata: {
        filename: fileName,
        filetype: mimeType,
      },
      headers: {
        authorization: `Bearer ${uploadToken}`,
      },
      onError: (error) => {
        console.log(`Failed because: ${error}`)
        reject(error)
      },
      onSuccess: () => {
        const uploadPath = upload.url?.split('/').slice(-1).at(0)
        if (!uploadPath) {
          throw new Error('Upload path not found')
        }
        resolve(uploadPath)
      },
    })
    upload.start()
  })
}

export { uploadFile }
