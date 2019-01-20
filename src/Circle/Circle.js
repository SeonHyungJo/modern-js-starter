import React from 'react'
import styles from './styles.css'

const Circle = props => (
  <>
    <style>${`${styles}`}</style>
    <div className="lds-circle">
      <div />
    </div>
  </>
)

export default Circle
