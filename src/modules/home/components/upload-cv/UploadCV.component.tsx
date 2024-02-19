import Image from 'next/image'

import { StyledDragger, StyledParagraph, StyledTitle } from './UploadCV.styles'
import uploadProps from './upload.props'

const UploadCV = () => (
  <>
    <StyledDragger {...uploadProps}>
      <Image src="upload.svg" alt="la[top" width={94} height={94} />
      <StyledTitle>Upload CV</StyledTitle>
      <StyledParagraph>( PDF or DOCX )</StyledParagraph>
    </StyledDragger>
  </>
)

export default UploadCV
