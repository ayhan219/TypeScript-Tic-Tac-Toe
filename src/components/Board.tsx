import React from 'react';
import SquareButton from './SquareButton';

interface BoardProps {
    value: (string | null)[], // Allow null values in the array
    onClick: (index: number) => void
}

const Board = ({ onClick, value }: BoardProps) => {
    return (
        <div style={styles.board}>
            <div style={styles.row}>
                <SquareButton onClick={() => onClick(0)} value={value[0]} />
                <SquareButton onClick={() => onClick(1)} value={value[1]} />
                <SquareButton onClick={() => onClick(2)} value={value[2]} />
            </div>
            <div style={styles.row}>
                <SquareButton onClick={() => onClick(3)} value={value[3]} />
                <SquareButton onClick={() => onClick(4)} value={value[4]} />
                <SquareButton onClick={() => onClick(5)} value={value[5]} />
            </div>
            <div style={styles.row}>
                <SquareButton onClick={() => onClick(6)} value={value[6]} />
                <SquareButton onClick={() => onClick(7)} value={value[7]} />
                <SquareButton onClick={() => onClick(8)} value={value[8]} />
            </div>
        </div>
    );
};

const styles = {
    board: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        gap: '10px',
    },
    row: {
        display: 'flex',
        gap: '10px',
    }
};

export default Board;
