import React from 'react'
import { Icon } from 'semantic-ui-react'
import Templates from '../../Templates'

const NoMatch = () => {
  return (
    <Templates>
      <Icon name='minus circle' size='big' />
      <strong>Page not found!</strong>
    </Templates>
  )
}

export default NoMatch
