import styled from 'styled-components'

interface IArrowButtonProps {
  isLeft: boolean
  onClick: () => void
}

const StyledWrapper = styled.div`
  cursor: pointer;
`

const ArrowButton = ({ isLeft, ...rest }: IArrowButtonProps) => {
  if (isLeft)
    return (
      <StyledWrapper {...rest}>
        <svg
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2107 21.1794L19.3669 13.0232C19.4519 12.9381 19.5673 12.8904 19.6875 12.8904C19.8077 12.8904 19.9231 12.9381 20.0081 13.0232C20.0931 13.1082 20.1409 13.2235 20.1409 13.3437C20.1409 13.464 20.0931 13.5793 20.0081 13.6643L12.6255 21.0469H31.4688C31.5889 21.0469 31.7042 21.0946 31.7892 21.1796C31.8741 21.2646 31.9219 21.3798 31.9219 21.5C31.9219 21.6202 31.8741 21.7354 31.7892 21.8204C31.7042 21.9054 31.5889 21.9531 31.4688 21.9531H12.6255L20.0081 29.3357C20.0931 29.4207 20.1409 29.536 20.1409 29.6562C20.1409 29.7765 20.0931 29.8918 20.0081 29.9768C19.9231 30.0619 19.8077 30.1096 19.6875 30.1096C19.5673 30.1096 19.4519 30.0619 19.3669 29.9768L11.2107 21.8206C11.1685 21.7785 11.1351 21.7285 11.1123 21.6735C11.0895 21.6185 11.0778 21.5595 11.0778 21.5C11.0778 21.4404 11.0895 21.3815 11.1123 21.3265C11.1351 21.2715 11.1685 21.2215 11.2107 21.1794Z"
            fill="#434343"
          />
          <circle
            cx="21.5"
            cy="21.5"
            r="21"
            transform="rotate(-180 21.5 21.5)"
            stroke="#434343"
          />
        </svg>
      </StyledWrapper>
    )

  return (
    <StyledWrapper {...rest}>
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="21.5" cy="21.5" r="21" fill="#434343" stroke="#434343" />
        <path
          d="M31.7893 21.8206L23.6331 29.9768C23.5481 30.0619 23.4327 30.1096 23.3125 30.1096C23.1923 30.1096 23.0769 30.0619 22.9919 29.9768C22.9069 29.8918 22.8591 29.7765 22.8591 29.6563C22.8591 29.536 22.9069 29.4207 22.9919 29.3357L30.3745 21.9531H11.5312C11.4111 21.9531 11.2958 21.9054 11.2108 21.8204C11.1259 21.7354 11.0781 21.6202 11.0781 21.5C11.0781 21.3798 11.1259 21.2646 11.2108 21.1796C11.2958 21.0946 11.4111 21.0469 11.5312 21.0469H30.3745L22.9919 13.6643C22.9069 13.5793 22.8591 13.464 22.8591 13.3438C22.8591 13.2235 22.9069 13.1082 22.9919 13.0232C23.0769 12.9381 23.1923 12.8904 23.3125 12.8904C23.4327 12.8904 23.5481 12.9381 23.6331 13.0232L31.7893 21.1794C31.8315 21.2215 31.8649 21.2715 31.8877 21.3265C31.9105 21.3815 31.9222 21.4405 31.9222 21.5C31.9222 21.5596 31.9105 21.6185 31.8877 21.6735C31.8649 21.7285 31.8315 21.7785 31.7893 21.8206Z"
          fill="white"
        />
      </svg>
    </StyledWrapper>
  )
}

export default ArrowButton
