
import React, { Component } from 'react'
import { Router, Route, hashHistory, Redirect } from 'react-router'
// import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
// const history = syncHistoryWithStore(hashHistory, store)
import home from 'views/home'
import store from "store";
import App from 'views/App.js';
const routeConfig = [
    {
        path: '/',
        component: App,
        indexRoute: { component: home },
        childRoutes: [
            // {
            //     path: '/cityCon/:name',
            //     component: require('views/mobile/cityCon/index').default,
            //     // getComponent: (location, cb) => {
            //     //     require.ensure([], require => {
            //     //         cb(null, require('views/mobile/cityCon/index').default)
            //     //     }, '/cityCon')
            //     // }
            //     childRoutes: [
            //         // {
            //         //     path: '/cityCon/call/:name',
            //         //     component: require('views/mobile/cityCon/index').default
            //         // }
            //     ]
            // },
            // {
            //     path: '/cityCon/call/:name',
            //     component: require('views/mobile/cityCon/call').default,
            //     onEnter: function (nextState, replaceState) {
            //         // replaceState(null, '/messages/' + nextState.params.id)
            //     }
            // },
            // {
            //     path: '/cityCon/message/:name',
            //     component: require('views/mobile/cityCon/message').default,
            //     onEnter: function (nextState, replaceState) {
            //         // replaceState(null, '/messages/' + nextState.params.id)
            //     }
            // },
            // {
            //     path: '/cityCon/wifi/:name',
            //     component: require('views/mobile/cityCon/wifi').default,
            //     onEnter: function (nextState, replaceState) {
            //         // replaceState(null, '/messages/' + nextState.params.id)
            //     }
            // },
            {
                path: '*',
                component: home,
            }
        ]
    }
]

const RouteUser = (
    <Router history={hashHistory} routes={routeConfig}>
        {/* <Route path="/" component={App}>
            <IndexRoute component={home} />
            <Route path='/cityCon/:name' getComponent={cityCon} />
            <Route path='/cityCon/call/:name' getComponent={cityConCall} />
            <Route path='/cityCon/message/:name' getComponent={cityConMessage} />
            <Route path='/cityCon/wifi/:name' getComponent={cityConWifi} />
            <Redirect from="*" to="/" />
        </Route> */}
    </Router>
)

export default RouteUser