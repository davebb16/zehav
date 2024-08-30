import Typography from '../Typography'

type props = {
  children: React.ReactNode
}

const Bold: React.FC<props> = ({ children }) => {
  return (
    <Typography fontWeight='bold' color='foreground' as='span'>
      {children}
    </Typography>
  )
}

export default Bold
