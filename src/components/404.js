import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NotFound extends Component {

  componentWillMount() {
    alert('404 NOT FOUND')
    this.context.router.replace('/')
  }

  render () {
    // 非实体组件需显式返回 null
     return (
      <div id="no-data">
          暂无数据
      </div>
    )
  }
}
