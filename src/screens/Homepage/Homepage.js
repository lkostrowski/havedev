import React from 'react';
import {connect} from 'react-redux';
import Header from '../../components/Header/Header'

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Homepage);