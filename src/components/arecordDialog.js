import React, { Component } from 'react'
import { format_time } from 'api/filters'
export default class arecordDialog extends Component {

    constructor(props) {
        super(props);
        this.state = _.extend({}, this.props.dialogData)
    }

    componentWillReceiveProps(nextProps){
        const propsData = nextProps.dialogData;
        this.setState(propsData)
    }

    componentDidMount() {
        const propsData = this.props.dialogData;
        this.setState({
            showFlag: propsData.showFlag
        })
    }

    componentWillUpdate(prevProps, prevState){

    }

    closed() {
        this.setState({
            showFlag: false
        })
    }


    render() {
        const showFlag = this.state.showFlag
        const list = this.state.recordData
        const prize = this.state.prizeList
        // 非实体组件需显式返回 null
        return (
            showFlag && <div className="j-record-dialog dialog-in" >
                <div className="j-cover" onClick={() => this.closed()}></div >
                <div className="j-record-container">
                    <div className="j-head">
                        <div className="item-head">
                            <img src={require('assets/img/title-record.png')} />
                        </div>
                    </div>
                    <div className="j-record-content">
                        <div className="j-content">
                            <div className="list-content">
                                <ol className="list-ol">
                                    {list.map((item,index)=>
                                        <li className={index == list.length -1 ? '' : 'bb' } key={index}>
                                            <div className="content">
                                                <span className="time">{format_time(item.time, 'yyyy-MM-dd hh:mm')}</span>
                                                <span className="prize">
                                                    點亮了 <em>{prize[item.type - 1 || 0].name}</em> 獲得了
                                                </span>
                                                <span className="desc" dangerouslySetInnerHTML={{ __html: prize[item.type - 1 || 0].desc }} ></span>
                                            </div>
                                        </li>
                                    )}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
