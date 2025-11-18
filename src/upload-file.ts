import * as tus from 'tus-js-client'

type UploadFileOptions = {
  tusServerUrl?: string
  uploadToken: string
  data: File | Blob | Buffer<ArrayBufferLike>
  mimeType: string
}

const uploadFile = (options: UploadFileOptions): Promise<void> => {
  const {
    tusServerUrl = 'https://tus.rough.app/files/',
    uploadToken,
    data,
    mimeType,
  } = options

  return new Promise((resolve, reject) => {
    const upload = new tus.Upload(data, {
      // create a new file for each upload
      removeFingerprintOnSuccess: true,

      endpoint: tusServerUrl,

      retryDelays: [0, 500, 750, 1000, 2000],

      metadata: {
        filetype: mimeType,
      },

      headers: {
        authorization: `Bearer ${uploadToken}`,
      },

      onError: (error) => {
        reject(error)
      },

      onSuccess: (_payload) => {
        resolve()
      },
    })

    upload.start()
  })
}

export { uploadFile }
