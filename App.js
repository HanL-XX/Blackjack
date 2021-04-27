import React, {Component} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 0,
      undopoint: [0],
    };
  }
  callbuton = but => {
    if (but == '1') {
      this.setState({point: this.state.point - 1});
      this.setState(previousState => {
        return {
          undopoint: [...previousState.undopoint, this.state.point - 1],
        };
      });
      console.log(this.state.undopoint);
    } else if (but == '2') {
      this.setState({point: this.state.point + 1});
      this.setState(previousState => {
        return {
          undopoint: [...previousState.undopoint, this.state.point + 1],
        };
      });
      console.log(this.state.undopoint);
    } else if (but == '3') {
      this.setState({point: this.state.point + 1});
      this.setState(previousState => {
        return {
          undopoint: [...previousState.undopoint, this.state.point + 1],
        };
      });
      console.log(this.state.undopoint);
    } else if (but == '4') {
      this.setState({point: this.state.point + 1});
      this.setState(previousState => {
        return {
          undopoint: [...previousState.undopoint, this.state.point + 1],
        };
      });
      console.log(this.state.undopoint);
    } else if (but == '5') {
      this.setState({point: this.state.point + 1});
      this.setState(previousState => {
        return {
          undopoint: [...previousState.undopoint, this.state.point + 1],
        };
      });
      console.log(this.state.undopoint);
    } else if (but == '6') {
      this.setState({point: this.state.point + 1});
      this.setState(previousState => {
        return {
          undopoint: [...previousState.undopoint, this.state.point + 1],
        };
      });
      console.log(this.state.undopoint);
    } else if (but == '10') {
      this.setState({point: this.state.point - 1});
      this.setState(previousState => {
        return {
          undopoint: [...previousState.undopoint, this.state.point - 1],
        };
      });
      console.log(this.state.undopoint);
    } else if (but == 'UNDO') {
      if (this.state.undopoint.length != 1) {
        this.setState({
          point: this.state.undopoint[this.state.undopoint.length - 2],
        });
        this.setState({
          undopoint: this.state.undopoint.filter(
            (_, i) => i !== this.state.undopoint.length - 1,
          ),
        });
        console.log(this.state.undopoint);
      }
    } else if (but == 'RESET') {
      this.setState({point: 0});
      this.setState({undopoint: [0]});
    }
  };
  render() {
    return (
      <View style={styles.contaner}>
        <View style={styles.head}>
          <Text
            style={[
              {
                flex: 1,
                fontSize: 60,
                textAlignVertical: 'center',
                textAlign: 'center',
                backgroundColor: 'pink',
              },
            ]}>
            {this.state.point}
          </Text>
        </View>
        <View style={styles.foot}>
          <View style={styles.butonrow}>
            <TouchableOpacity
              style={styles.buton}
              onPress={() => this.callbuton(1)}>
              <Text style={{fontSize: 50}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buton}
              onPress={() => this.callbuton(2)}>
              <Text style={{fontSize: 50}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buton}
              onPress={() => this.callbuton(3)}>
              <Text style={{fontSize: 50}}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.butonrow}>
            <TouchableOpacity
              style={styles.buton}
              onPress={() => this.callbuton(4)}>
              <Text style={{fontSize: 50}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buton}
              onPress={() => this.callbuton(5)}>
              <Text style={{fontSize: 50}}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buton}
              onPress={() => this.callbuton(6)}>
              <Text style={{fontSize: 50}}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.butonrow}>
            <TouchableOpacity style={styles.buton}>
              <Text style={{fontSize: 50}}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buton}>
              <Text style={{fontSize: 50}}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buton}>
              <Text style={{fontSize: 50}}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.butonrow}>
            <TouchableOpacity
              style={styles.buton}
              onPress={() => this.callbuton('RESET')}>
              <Text style={{fontSize: 50}}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buton}
              onPress={() => this.callbuton(10)}>
              <Text style={{fontSize: 50}}>10</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buton}
              onPress={() => this.callbuton('UNDO')}>
              <Text style={{fontSize: 50}}>Undo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contaner: {
    flex: 1,
  },
  head: {
    flex: 1,
  },
  foot: {
    flex: 4,
  },
  butonrow: {
    flex: 4,
    flexDirection: 'row',
  },
  buton: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
