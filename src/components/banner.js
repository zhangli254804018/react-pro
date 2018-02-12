import React, { Component } from 'react'
// import Swiper from 'swiper'
// const Swiper = require('swiper').default
// import Swiper from 'swiper/dist/js/swiper.js'
export default class banner extends Component {

    componentDidMount() {

    }


    render() {
        const propsData = this.props.homeData;

        // 非实体组件需显式返回 null
        return (
            <div className="t-content t-banner">
                <h3 className="time">活動時間：2.26-3.04</h3>
                <div className="item-media">
                    <img src={require('assets/img/banner.jpg')} />
                </div>
            </div>
        )
    }
}
