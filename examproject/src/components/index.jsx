import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
      Immigration Law
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
     Family Law
      </a>
    ),
   
    disabled: false,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
       Criminal Law
      </a>
    ),
    disabled: false,
  },
 
  {
    key: '5',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
   Civil Rights Law
      </a>
    ),
  
    disabled: false,
  },
  {
    key: '6',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
Buiness Law
      </a>
    ),

    disabled: false,
  },
  {
    key: '7',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
Bancrupticy Law
      </a>
    ),
  
    disabled: false,
  },
];
const App = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
     Practise Areas
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default App;