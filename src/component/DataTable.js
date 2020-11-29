import {  Table, Pagination } from "antd";
import 'antd/dist/antd.css';
import React from "react";

/**
 * Below in return method we have used <> </>. 
 * This is call fragment in React. It is basically shorthand property of react fragment. 
 * Since Return statement allows only one child to return we have to wrap everything in one container.
 * React fragments serves the purpose and we need not to add extra nodes to DOM.
 */
class DataTable extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            data: this.props.data
        }
       
    }
   
    

    onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
        this.setState({data: this.state.data.slice(0,pageSize)})
    }

    changePage = (current, pageSize) => {
        console.log('change page', current, pageSize)
        this.setState({data: this.props.data.slice((current-1)* pageSize, (current*pageSize))})
    }
  
    render() {
        console.log(this.state.data)
        const columns = [
            {
                title: 'Id',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '',
                dataIndex: 'image',
                render: (url) => <img src={url} alt="beer image" height="48px" width="48px" />
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                    // ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Style',
                dataIndex: 'style',
                key: 'style',
            },
            {
                title: 'Ounces',
                dataIndex: 'ounces',
                key: 'ounces',
            },
            {
                title: 'Abv',
                dataIndex: 'abv',
                key: 'abv',
            },
            {
                title: 'Ibu',
                dataIndex: 'ibu',
                key: 'ibu',
            },
            
        ];

        return (
            <>
                <Table columns={columns} dataSource={this.state.data.slice(0,20)} pagination={false} rowKey='key'/>
                <Pagination
                    onChange={this.changePage}
                    defaultPageSize={20}
                    onShowSizeChange={this.onShowSizeChange}
                    defaultCurrent={1}
                    total={this.props.data.length}
                />
            </>
            
        )
    }
}

export default DataTable;