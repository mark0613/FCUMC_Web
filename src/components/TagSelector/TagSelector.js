import { Select } from 'antd';

import { sourceConfig } from '../Config';


function generateOptions(sourceName) {
    let source = [];
    for (let config of sourceConfig) {
        if (config.key === sourceName) {
            source = config.data;
            break;
        }
    }

    const optionClass = [];
    const options = [];
    for (let item of source) {
        if (!optionClass.includes(item.class)) {
            optionClass.push(item.class);
            options.push({
                label: item.class,
                options: [],
            })
        }
        let index = optionClass.indexOf(item.class);
        options[index].options.push({
            label: item.title,
            value: item.title,
            id: `${options[index].label}-${item.title}`,
        })
    }
    return options
}


export function TagSelector(props) {
    const options = generateOptions(props.sourceName);

    return (
        <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="選擇 Tags"
            onChange={props.handleChange}
            options={options}
        />
    )
}