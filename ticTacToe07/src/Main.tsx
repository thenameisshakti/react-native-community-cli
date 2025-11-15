import { View, Text, StyleSheet,FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icons from './components/Icons'
import { Snackbar } from 'react-native-paper';


const Main = () => {
    const [isCross,setIsCross] = useState<boolean>(false)
    const [gameWinner,setGameWinner] = useState<string>("")
    const [gameState, setGameState] = useState(new Array(9).fill('empty',0,9))
    const [visible, setVisible] = useState(false);
    const [snackText, setSnackText] = useState('');
    const [snackColor, setSnackColor] = useState('#000'); 

    const showSnack = (text: string, color = '#000') => {
      setSnackText(text);
      setSnackColor(color);
      setVisible(true);
    };

    const reload = () => {
      setIsCross(false)
      setGameWinner('')
      setGameState(new Array(9).fill("empty",0,9))
    }

    const checkWinner = () => {
      if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }

    }

    const onChangeItem = (itemNumber: number) => {
      if (gameWinner) {
        return showSnack(gameWinner, '#000000');
      }
      if (gameState[itemNumber]== 'empty'){
        gameState[itemNumber] = isCross ? "cross" : "circle"
        setIsCross(!isCross)
      }else {
        return showSnack('Position is already filled', 'red');

      }
      checkWinner()

    }
  return (
    <SafeAreaView style={{flex: 1,marginLeft: 15}}>
        <View>
            <Text>TIC TAK TOE</Text>
        </View>
        {gameWinner ? (
          <View style={[styles.playerInfo, styles.winnerInfo]}>
            <Text style={styles.winnerTxt}>{gameWinner}</Text>
          </View>
        ) : (
          <View style={[styles.playerInfo, 
            isCross ? styles.playerX : styles.playerO
          ]}>
            <Text> Player {isCross ? 'X' : 'O'} 's Turn </Text>
          </View>
        ) }
        {/* game grid */}
        <FlatList 
        numColumns={3}
        data={gameState}
        style={styles.grid}
        renderItem={({item , index}) => (
          <Pressable 
          key={index}
          style={styles.card}
          onPress={() => onChangeItem(index)}
          >
            <Icons name= {item} />
          </Pressable>
        )}

        />
        <Pressable
        style={styles.gameBtn}
        onPress={reload}>
          <Text style={styles.gameBtnText}>
            {gameWinner ? "Start new game" : "Reload the Game"}
          </Text>
        </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#009BD6',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});


export default Main