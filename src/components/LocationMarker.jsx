import { Typography } from 'antd';
import React from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';

const { Paragraph, Title } = Typography;

function LocationMarker() {
  const value = useSelector((state) => state.dataReducer.value);

  const map = useMap();

  React.useEffect(() => {
    if (value) {
      map.flyTo(value[0].coordinates, 4);
    }
  }, [map, value]);

  return value === null ? null : (
    <Marker position={value[0].coordinates}>
      <Popup>
        <Paragraph>
          <Title level={5}>{value[0].country}</Title>
          <ul>
            <li>Currency :{value[0].currency}</li>
            <li>Speed :{value[0].speed}</li>
            <li>Distance :{value[0].distance}</li>
            <li>Volume :{value[0].volume}</li>
            <li>Timezone :{value[0].timezone}</li>
          </ul>
        </Paragraph>
      </Popup>
    </Marker>
  );
}

export default LocationMarker;
