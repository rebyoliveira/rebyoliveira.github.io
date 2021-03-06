import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1200,
        padding: '0px',
        paddingTop: 20, 
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
