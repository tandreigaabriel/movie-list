import React from 'react'
import { Typography, Layout } from 'antd'


const { Title } = Typography;
const { Header:AntdHeader } = Layout;



const Header = () => {
    return (
        <AntdHeader>
            <Title>Movie List App</Title>
        </AntdHeader>
    );
}

export default Header;