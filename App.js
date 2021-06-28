import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';
import { default as calculatePermutations } from './src/ngrams/permutations'

const PermutationsInjector = ({ text, children }) => {
  const permutations = useMemo(() => calculatePermutations(text || ''), [text]);

  //return React.Children.map(children, (child) => React.cloneElement(child, { permutations }))
  return children({ permutations });
}


const App = () => {
  const [text, setText] = useState(null);
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <TextInput 
        value={text}
        onChangeText={setText}
        placeholder="Insert your phrase here"
        style={styles.input}
      />
      
      <PermutationsInjector text={text}>
        { ({ permutations }) => (
          <Text>
            { permutations.join('\n') }
          </Text>
        )}
      </PermutationsInjector>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 42,
    margin: 10,
    marginBottom: 20,
    borderColor: '#3d3d3d',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
  }
});

export default App;
