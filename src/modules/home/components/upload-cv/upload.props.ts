import type { UploadProps } from 'antd'
import { message } from 'antd'

const uploadProps: UploadProps = {
  accept: 'application/pdf,application/vnd.ms-word',
  name: 'file',
  maxCount: 1,
  action: '',
  onChange(info) {
    const { status } = info.file
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }
}

export default uploadProps
