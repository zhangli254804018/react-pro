import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'actions'
import 'assets/less/main.less'
import Banner from 'components/banner'
import List from 'components/list'
import Rule from 'components/rule'
import { facebook, rcAsyncInit } from 'api/util'

class homeView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onHash(hash) {
    const state = this.props
    const router = state.router
    router.push(hash)
  }

  componentWillMount() {

  }

  componentDidMount() {
    const { actions } = this.props
    facebook();
    rcAsyncInit();
  }

  render() {
    const { home, actions } = this.props;
    const homeData = home;
    const profile = home.profile || {};
    return (
      <div className="pages">
        <div className="page">
          <div className="page-content">
            <div className="t-nav">
              <div className="t-nav-wrap">
                <div className="t-nav-l clearfix">
                  <div className="t-nav-logo">
                    <a href="/" title="返回首頁"><img src="/img/newHome/logo_rcshow_v2.png" alt="RC直播" /></a>
                  </div>
                  <div className="t-nav-menu">
                    <a href="/">首頁</a>
                    <a href="/index.php?c=newHome&a=family">家族</a>
                    <a href="/index.php?c=newHome&a=ranking">排行</a>
                    <a href="/index.php?c=newHome&a=act">活動</a>
                    <a href="/shop">商城</a>
                  </div>
                </div>
                <div className="t-nav-r">
                  <div className="t-nav-sub">
                    <div className="t-nav-pane fl">
                      <div className="t-nav-login" id="j-nav-login"><a href="javascript:;" onClick={() => RC.login(function () { location.reload() })} >登入</a>
                        <a href="javascript:;" onClick={() => RC.reg()}>註冊</a></div>
                      <div className="t-nav-profile" id="j-nav-profile">
                        <a href="/index.php?c=showroom&a=baseInfo" className="nav-profile-item t-nav-nick" target="_blank">nick</a><a
                          href="javascript:;" className="nav-profile-item t-nav-charge" onClick={() => RaidPay.charge()}>儲值</a><a
                            href="javascript:;" className="nav-profile-item t-nav-logout" onClick={() => RC.logout()}>退出</a>
                      </div>
                    </div>
                    <div className="t-nav-ext fl">
                      <a href="/view/sign/index.php" className="t-nav-join" target="_blank">藝人招募</a>
                      <a href="/apps/download/" id="j-t-nav-download" target="_blank">下載APP</a>
                      <a href="javascript:;" onClick={() => RC.feedback()}>意見反饋</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="t-nav-border"></div>
            </div>
            <div className="t-main">
              <Banner homeData={homeData}></Banner>
              <List homeData={homeData} actions={actions}></List>
              <Rule homeData={homeData}></Rule>
            </div>
          </div>
        </div>

        <div className="page-dialog" id="j-dialog"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { home: state.homeState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(homeView)
