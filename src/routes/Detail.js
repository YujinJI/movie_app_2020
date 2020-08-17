import React from 'react';
import { loadOptions } from '@babel/core';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state == undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;