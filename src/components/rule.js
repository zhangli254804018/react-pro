import React, { Component } from 'react'
// import Swiper from 'swiper'
// const Swiper = require('swiper').default
// import Swiper from 'swiper/dist/js/swiper.js'
export default class rule extends Component {

    componentDidMount() {

    }


    render() {
        const propsData = this.props.homeData;
        const prize = propsData.prize;
        // 非实体组件需显式返回 null
        return (
            <div className="t-content t-rule t-clouds">
                <div className="title">
                    <img src={require('assets/img/title-rule.png')} />
                </div>
                <div className="item-container">
                    <div className="item-content">
                        <div className="content">
                            <article>
                                <ol>
                                    <li>
                                        元宵佳節點花燈時間：2月26日至3月04日</li>
                                    <li>
                                        活動期間，送出30及以上組合的【字謎】均有機會點亮四種花燈，花燈按照等級低高依次是：素淨花燈＜五彩花燈＜繁花花燈＜鎏金花燈</li>
                                    <li>
                                        點亮了的花燈，可獲得該彩燈徽章和花燈好禮唷！具體如下：</li>
                                    <table border="0" cellSpacing="0" cellPadding="0">
                                        <colgroup>
                                            <col align="center" width="20%" />
                                            <col align="left" width="30%" />
                                            <col align="right" width="auto" />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th colSpan="3" align="center" >
                                                    點花燈 鬧元宵</th>
                                            </tr>
                                            <tr>
                                                <th colSpan="1">花燈等級</th>
                                                <th colSpan="1">
                                                    點亮後獲得好康</th>
                                                <th colSpan="1">點亮花燈注意事項</th>
                                            </tr>
                                            {
                                                prize.map((item, index) => <tr key={index}>
                                                    <td><p className="name" dangerouslySetInnerHTML={{ __html: item.name }}  ></p></td>
                                                    <td>
                                                        <p className="desc" dangerouslySetInnerHTML={{ __html: item.desc }}  ></p>
                                                    </td>
                                                    {index == 0 && <td style={{ 'wordWrap': 'break-word', 'width': '372px' }} rowSpan="4">
                                                        <div className="table-cell-line">
                                                            <p >1.【字謎】*30的組合及以上均有機會點亮</p>
                                                            <p >2.越高級的花燈，點亮的難度越大，但獲得的禮物越豐富</p>
                                                            <p >3.組合越大的字謎，點亮的機會越大</p>
                                                            <p >4.成功點亮花燈時，公屏將會展示系統信息公告</p>                                    
                                                            <p>5.花燈點亮的次數不限，每次點亮都可以獲得對應的元宵好康喔</p>
                                                        </div>
                                                    </td>
                                                    }
                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                    <li>
                                       元宵活動期間，字謎禮物和四個花燈禮物將加入本週元宵周星唷！
                                        <p>--獲得元宵周星第一的7位主播可獲得5千秀鑚+【華燈初上】徽章+【華燈初上】APP開播標示</p>
                                        <p>--活動元宵周星第一的7位玩家可獲得2萬秀幣+【華燈初上】徽章+100萬財富值</p>
                                    </li>
                                </ol>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
