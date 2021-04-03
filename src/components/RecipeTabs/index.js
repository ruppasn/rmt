import React from 'react';
import { Tabs } from 'antd';
import RecipeTable from '../RecipeTable';

const { TabPane } = Tabs;

const RecipeTabs = () => {

    return   <div className="tabs-container">

    <Tabs type="card"
    size="large"
     tabBarStyle={{    
        borderTopLeftRadius: '22px',
        borderTopRightRadius: '100px'
    }}>
      <TabPane tab="ALL RECIPE(S)" key="1">
        <RecipeTable params={{}}/>
      </TabPane>
      <TabPane tab="INCORRECT" key="2">
      <RecipeTable params={{is_incorrect: true}}/>
      </TabPane>
      <TabPane tab="UNTAGGED" key="3">
      <RecipeTable params={{is_untagged: true}}/>
      </TabPane>
      <TabPane tab="DISABLED" key="4">
      <RecipeTable params={{id_disabled: true}}/>
      </TabPane>
    </Tabs>
    </div>
}

export default RecipeTabs;