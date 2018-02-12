import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ArecordDialog from 'components/arecordDialog'
import AlertDialog from 'components/alertDialog'
import { fetchRecord } from 'store/actions'
export default class list extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    getRecord(){
        const vm = this
        const { actions } = this.props
        if (!RC.isLogin) return RC.login(function () {
            actions.fetchRecord().then(function (res) {
                const homeData = vm.props.homeData;
                ReactDOM.render(
                    <ArecordDialog dialogData={{ showFlag: true, recordData: homeData.recordData, prizeList: homeData.prize }} />
                    , document.getElementById('j-dialog'));
            })
        })
        actions.fetchRecord().then(function(res){
            const homeData = vm.props.homeData;
            ReactDOM.render(
                <ArecordDialog dialogData={{ showFlag: true, recordData: homeData.recordData, prizeList: homeData.prize }} />
                , document.getElementById('j-dialog'));
        })
    }

    getWish(id){
        const homeData = this.props.homeData;
        // if (!RC.isLogin) return RC.login(function(){
        //     ReactDOM.render(
        //         <AlertDialog dialogData={{ showFlag: true, ids: id || 0, prizeList: homeData.prize }} />
        //         , document.getElementById('j-dialog'));
        // })
        ReactDOM.render(
            <AlertDialog dialogData={{ showFlag: true, ids: id || 0, prizeList: homeData.prize }} />
            , document.getElementById('j-dialog'));
    }


    render() {
        const propsData = this.props.homeData;
        const list = propsData.list;
        // 非实体组件需显式返回 null
        return (
            <div className="t-content t-lantern t-clouds ">
                <div className="title">
                    <img src={require('assets/img/title-lantern.png')} />
                </div>
                <div className="item-container record-container">
                    <div className="item-content">
                        <div className="record-title">
                            <a className="link-record" onClick={() => this.getRecord() }>
                                <img className="item-img" src={require('assets/img/title-rcord.png')} />
                            </a>
                        </div>
                        <div className="record-content">
                        {
                            list.map((item, index) =>
                                <div className="item-lantern" key={index} onClick={() => this.getWish(item.id)}>
                                    <div className="item-img">
                                        <img src={require( `assets/img/latern-${item.id}.png`)} />
                                    </div>
                                    <div className="item-tip">
                                        已點亮 <em>{item.count}</em> 次
                                    </div>
                                </div>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
