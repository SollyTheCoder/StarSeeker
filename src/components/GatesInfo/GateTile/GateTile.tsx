import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GateInfo} from 'starseeker-types/types';

function GateTile({
  index,
  gateInfo,
}: {
  index: number;
  gateInfo: GateInfo;
}): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const backgroundColours = [
    '#ef476f',
    '#ffd166',
    '#06d6a0',
    '#118ab2',
    '#9d4edd',
  ];

  return (
    <>
      <Pressable
        style={[
          styles.container,
          {backgroundColor: backgroundColours[index % 5]},
        ]}
        onPress={() => setExpanded(!expanded)}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.name}>{gateInfo.name}</Text>
            <Text style={styles.code}>{gateInfo.code}</Text>
          </View>
          <View>
            <Text>#{gateInfo.links.length}</Text>
          </View>
        </View>
        {expanded ? (
          <View style={styles.expanded}>
            {gateInfo.links.map((value, index) => (
              <View key={index} style={styles.expandedLinks}>
                <Text>{value.code}</Text>
                <Text> - </Text>
                <Text>{value.hu}</Text>
              </View>
            ))}
          </View>
        ) : null}
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 15,
    padding: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
  code: {
    fontStyle: 'italic',
    fontWeight: '300',
  },
  expanded: {marginTop: 5, borderTopColor: 'black', borderTopWidth: 1},
  expandedLinks: {flexDirection: 'row'},
});

export default GateTile;
