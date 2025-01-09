import * as tus from 'tus-js-client'

type UploadFileOptions = {
  tusServerUrl?: string
  uploadToken: string
  data: Buffer
  fileName: string
  mimeType: string
}

type UploadResult = {
  url: string
  uploadId: string
}

const uploadFile = (options: UploadFileOptions): Promise<UploadResult> => {
  const {
    tusServerUrl = 'https://tus.rough.app/files/',
    uploadToken,
    data,
    fileName,
    mimeType,
  } = options

  return new Promise((resolve, reject) => {
    // override the type of data to File
    const file = data as unknown as File
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
        const url = upload.url
        if (!url) {
          throw new Error('Upload URL not found')
        }
        const uploadId = url.split('/').slice(-1).at(0)
        if (!uploadId) {
          throw new Error('Upload path not found')
        }
        resolve({
          url,
          uploadId,
        })
      },
    })
    upload.start()
  })
}

export { uploadFile }
