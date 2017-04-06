import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Drawer } from 'native-base';
import App from './app';
import Detail from './detail';
import Sidebar from './components/sidebar';

export default class Application extends Component {
    constructor(){
        super();
        this.closeDrawer = this.closeDrawer.bind(this);
        this.openDrawer = this.openDrawer.bind(this);
    }

    closeDrawer(){
        this.drawer.root.close();
    }
    openDrawer(){
        this.drawer.root.open();
    }

    render() {
        return (
            <Drawer
              ref={(ref) => { this.drawer = ref; }}
              content={<Sidebar navigator={this.navigator} />}>
                <Router>
                    <Scene key="root">
                        <Scene key="app" component={App} initial={true} hideNavBar={true}/>
                        <Scene key="detail" component={Detail} hideNavBar={true}/>
                    </Scene>
                </Router>
            </Drawer>
        );
    }
}