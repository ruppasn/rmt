import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import apiClient from '../../utils/apiClient';
   
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Last Updated',
      dataIndex: 'last_updated',
    },
    
    {
        title: 'COST PRICCE',
        dataIndex: 'cost_price',
      },
      {
        title: 'SALES PRICE',
        dataIndex: 'sale_price',
      },
      {
        title: 'GROSS MARGIN',
        dataIndex: 'gross_margin',
      },
  ];

const RecipeTable = ({params}) => {

    const [data, setData] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);

    let url = 'recipes/?page=1';

    useEffect(() => {
        apiClient.get(url, { params }).then(({data}) => {
            console.log(data)
            setData(data.results || [])
        })
    }, []);

    const start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
          this.setState({
            selectedRowKeys: [],
            loading: false,
          });
        }, 1000);
      };

      
    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys);
      };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };


    return  <div className="recipe-table"> 
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>

}

export default RecipeTable;