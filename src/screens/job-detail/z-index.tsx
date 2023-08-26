import React from 'react';

import { Text, View } from '@/ui';
const componentsData = [
  { backgroundColor: '#98EECC', text: 'A' },
  { backgroundColor: '#78C1F3', text: 'S' },
  { backgroundColor: '#9376E0', text: '+3' },
];

const ZIndex = () => {
  return (
    <View flexDirection={'row'}>
      {componentsData.map((data, index) => {
        const marginLeft = index === 0 ? 0 : -8; // Calculate marginLeft

        return (
          <View
            width={24}
            height={24}
            borderRadius={20}
            alignItems={'center'}
            justifyContent={'center'}
            key={index}
            style={[{ backgroundColor: data.backgroundColor, marginLeft }]}
          >
            <Text>{data.text}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ZIndex;
