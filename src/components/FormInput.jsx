import React from 'react';
import { Button, Form, Select, Card } from 'antd';
import { useDispatch } from 'react-redux';
import { addData } from '../redux/dataSlice';

const { Option } = Select;

function FormInput() {
  const dispatch = useDispatch();
  const regions = ['India', 'United States', 'United Kingdom'];
  const [state, setState] = React.useState('');

  const handleSubmit = () => {
    dispatch(addData(state));
  };
  return (
    <Card className="FormInput">
      <Form className="FormInput-form" layout="inline">
        <Form.Item>
          <Select
            placeholder="Select a Region"
            style={{ width: '150px' }}
            onChange={(value) => setState(value)}
          >
            {regions.map((region) => (
              <Option value={region} key={region}>
                {region}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="secondary" htmlType="submit" onClick={handleSubmit}>
            Load
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default FormInput;
