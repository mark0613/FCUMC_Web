import { Select } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


export function TagSelector(props) {
    return (
        <Select
            mode="multiple"
            options={props.options}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            autoClearSearchValue={true}
            placeholder="選擇 Tags"
            showArrow
            allowClear
            maxTagCount={3}
            style={{ width: '100%', textAlign: 'left' }}
            clearIcon={<DeleteOutlined style={{color: "red"}} />}
        />
    )
}