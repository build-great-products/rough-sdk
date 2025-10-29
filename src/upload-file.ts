import * as tus from 'tus-js-client'

type UploadFileOptions = {
  tusServerUrl?: string
  uploadToken: string
  data: Buffer
  fileName: string
  mimeType: string
}

type UploadResult = {
  key: string
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
      // create a new file for each upload
      removeFingerprintOnSuccess: true,

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
        // The upload has finished successfully, now we can get the file URL
        // and key from the upload object.
        //
        // An example URL might look like this:
        //   "https://tus.rough.app/files/44547016373871b5e4aaf1ae716cca8a+NJ6wFr2x_ARQLSYLR4LcAUIrPk2ePCetFlwN4iwZrw.sA0_nrZlUAlWmoL7Q7UMtH97xTAhXU3Yqim91Am60vPvOZr3PA.6YifZbXvEKhzANK5twV2YqFjCs9BloQo5ioKV5Tz.qmONs2it_NrP6Xw--"
        // In this example the key is "44547016373871b5e4aaf1ae716cca8a"
        // View this example in the playground: https://regex101.com/r/04RdbD/2
        const key = upload.url?.match(/\/([^/+\s]+)(?:\+[^/\s]+)?$/)?.at(1)
        if (!key) {
          throw new Error('Upload key not found')
        }
        resolve({
          key,
        })
      },
    })

    upload.start()
  })
}

export { uploadFile }
