import React, { Component } from 'react'

export const AppContext = React.createContext();

export default class index extends Component {

    state = {}

    fetchRecords = () => {
        fetch('https://applefacilities.review.blueriver.com/index.cfm/_api/json/v1/scv/building/?andOpenGrouping&locationCode%5B0%5D=sqo&or&locationCode%5B2%5D=nwr&or&locationCode%5B4%5D=scv&or&locationCode%5B6%5D=sfo&closeGrouping&fields=buildingname,buildingabbr,lat,lng,black,buildingZone&active=1&cachedwithin=600')
        .then( res => res.json())
        .then( data => this.setState(data))
        .catch( err => console.log("Upps: ", err))
    }

    componentDidMount() {
        this.fetchRecords();
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}



