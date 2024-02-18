import type { UploadProps } from 'antd'
import { message } from 'antd'

const uploadProps: UploadProps = {
  name: 'file',
  multiple: true,
  action: '',
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files)
  }
}

export default uploadProps
