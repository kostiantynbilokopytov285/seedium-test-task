import { Upload } from 'antd'

import Flex from '@/modules/common/components/flex'

import uploadProps from './upload.props'

const { Dragger } = Upload

const UploadCV = () => (
  <>
    <Dragger {...uploadProps}>
      <p className="ant-upload-text">Upload CV</p>
      <p className="ant-upload-hint">( PDF or DOCX )</p>
    </Dragger>
  </>
)

export default UploadCV
