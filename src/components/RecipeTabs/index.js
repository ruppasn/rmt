import React from 'react';
import { Tabs } from 'antd';
import RecipeTable from '../RecipeTable';

const { TabPane } = Tabs;

const RecipeTabs = () => {

    return   <div className="tabs-container">

    <Tabs type="card" tabBarStyle={{    
        borderTopLeftRadius: '22px',
        borderTopRightRadius: '100px'
    }}>
      <TabPane tab="Tab Title 1" key="1">
        <RecipeTable />
      </TabPane>
      <TabPane tab="Tab Title 2" key="2">
        
      </TabPane>
      <TabPane tab="Tab Title 3" key="3">
       
      </TabPane>
    </Tabs>
    </div>
}

export default RecipeTabs;