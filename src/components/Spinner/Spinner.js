import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export class Spinner extends React.Component {
    generate(size) {
        return (
            <LoadingOutlined
                style={{
                    fontSize: size,
                }}
                spin
            />
        )
    }
    render() {
        let size = parseInt(this.props.size);
        let indicator = this.generate(size);
        return (
            <Spin indicator={indicator} />
        )
    }
}


