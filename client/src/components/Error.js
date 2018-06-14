import React from 'react'
import Typography from '@material-ui/core/Typography'

let Error = props => {
  const { message } = props
  return (
    <div>
      <Typography variant="headline" color="error" gutterBottom>
        Error
      </Typography>
      <pre>{message}</pre>
    </div>
  )
}

export { Error }
