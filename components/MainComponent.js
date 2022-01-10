import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfo';
import { View } from 'react-native';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }

    render() {
        <View style={{flex: 1}}>
            <Directory
                campsites={this.state.campsites}
                onPress={campsiteId => this.onCampsiteSelect(campsiteId)}
            />
            <CampsiteInfo
                campsite={this.state.campsites.filter(
                    campsite => campsite.id === this.state.selectedCampsite)[0]}
            />
        </View>
        return <Directory campsites={this.state.campsites} />
    }
}

export default Main;