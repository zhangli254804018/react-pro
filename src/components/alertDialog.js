import React, { Component } from 'react'
import { format_time } from 'api/filters'
export default class arecordDialog extends Component {

    constructor(props) {
        super(props);
        this.state = _.extend({}, this.props.dialogData)
    }

    componentWillReceiveProps(nextProps) {
        const propsData = nextProps.dialogData;
        this.setState(propsData)
    }

    componentDidMount() {
        const propsData = this.props.dialogData;
        this.setState({
            showFlag: propsData.showFlag
        })
    }

    componentWillUpdate(prevProps, prevState) {

    }

    closed() {
        this.setState({
            showFlag: false
        })
    }


    render() {
        const showFlag = this.state.showFlag
        const prize = this.state.prizeList
        const ids = this.state.ids
        // 非实体组件需显式返回 null
        return (
            showFlag &&
            <div className="j-record-dialog dialog-in">
                <div className="j-record-container">
                    <div className="j-head">
                        <div className="item-head">
                            <img src={require(`assets/img/titel-${ids}.png`)} />
                        </div>
                    </div>
                    <div className="j-record-content">
                        <div className="j-content">
                            <div className="prize-content">
                                <p className="title">點亮即可獲得:</p>
                                {/* <p className="prize"> { prize[ids-1|| 0].name } </p> */}
                                <p className="desc" dangerouslySetInnerHTML={{ __html: prize[ids - 1 || 0].desc }}  ></p>
                            </div>
                            <div className="btns" onClick={() => this.closed()}>
                                <a className="link-btn" href="javascript:;">確認</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="j-cover" onClick={() => this.closed()}></div >
            </div >
        )
    }
}
