import { Card, Typography } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const { Paragraph } = Typography;

function RegionInfo() {
  const value = useSelector((state) => state.dataReducer.value);
  return value === null ? null : (
    <Card title={value[0].country} bordered={false} style={{ width: 300 }}>
      <Paragraph>
        <ul>
          <li>Currency : {value[0].currency}</li>
          <li>Speed : {value[0].speed}</li>
          <li>Distance : {value[0].distance}</li>
          <li>Volume : {value[0].volume}</li>
          <li>Timezone : {value[0].timezone}</li>
        </ul>
      </Paragraph>
    </Card>
  );
}

export default RegionInfo;
