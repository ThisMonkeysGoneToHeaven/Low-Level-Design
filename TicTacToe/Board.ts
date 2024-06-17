enum BOARD_VALS{
    EMPTY,
    ZERO,
    CROSS        
}

class Board{

    board: BOARD_VALS[][];

    constructor(board_size: number){
        this.board = Array.from(Array(board_size), () => Array(board_size).fill(BOARD_VALS.EMPTY));
    }    

    
}