import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import {userData} from '../../dummyData';
import WidigetSm from '../../components/widigetSm/WidigetSm'
import WidigetLg from '../../components/widigetLg/WidigetLg'

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart title="User Analytics" dataKey="Active User" data={userData} gird/>
            <div class="homeWidgets">
                <WidigetSm/>
                <WidigetLg/>
            </div>
        </div>
    )
}

export default Home
