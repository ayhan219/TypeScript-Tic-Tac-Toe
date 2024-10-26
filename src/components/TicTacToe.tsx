import React, { useEffect, useState } from 'react';
import Board from './Board';

const TicTacToe = () => {
    const [value, setValue] = useState<Array<string | null>>(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState<string | null>(null);
    const [isDrawMatch, setIsDrawMatch] = useState(false);

    const checkWinner = () => {
        const winIndexes = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winIndexes.length; i++) {
            const [a, b, c] = winIndexes[i];
            if (value[a] && value[a] === value[b] && value[a] === value[c]) {
                return value[a];
            }
        }
        return null;
    };

    const handleClick = (index: number) => {
        if (value[index] === null && !winner && !isDrawMatch) {
            const updatedValue = [...value];
            updatedValue[index] = currentPlayer;
            setValue(updatedValue);
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };

    const isBoardFull = () => {
        return value.every((square) => square !== null);
    };

    useEffect(() => {
        const newWinner = checkWinner();
        if (newWinner) {
            setWinner(newWinner);
        } else if (isBoardFull()) {
            setIsDrawMatch(true);
        }
    }, [value]); 

    const handleX = () => {
        setCurrentPlayer('X');
    };
    const handleO = () => {
        setCurrentPlayer('O');
    };
    const handleNewGame = () => {
        setValue(Array(9).fill(null));
        setWinner(null);
        setIsDrawMatch(false);
        setCurrentPlayer('X');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Tic Tac Toe</h1>
            <Board onClick={handleClick} value={value} />
            {winner ? (
                <h2 style={styles.message}>Winner: {winner}</h2>
            ) : isDrawMatch ? (
                <h2 style={styles.message}>Draw Match</h2>
            ) : (
                <h2 style={styles.message}>Player: {currentPlayer}</h2>
            )}
            <div style={styles.buttonGroup}>
                <h2>Select Player:</h2>
                <button style={styles.button} onClick={handleX}>
                    X
                </button>
                <button style={styles.button} onClick={handleO}>
                    O
                </button>
            </div>
            <button style={styles.newGameButton} onClick={handleNewGame}>
                Start New Game
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '1rem',
        color: '#333',
    },
    message: {
        fontSize: '1.5rem',
        margin: '1rem 0',
        color: '#333',
    },
    buttonGroup: {
        display: 'flex',
        gap: '1rem',
        marginBottom: '1rem',
        alignItems: 'center',
    },
    button: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        cursor: 'pointer',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        outline: 'none',
    },
    newGameButton: {
        marginTop: '1rem',
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        cursor: 'pointer',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#28a745',
        color: '#fff',
        outline: 'none',
    },
};

export default TicTacToe;
