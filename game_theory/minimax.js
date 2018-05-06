/*
    Minimax Algorithm
 */
// var huPlayer = "O", aiPlayer = "X",
//     origBoard = ["O",1 ,"X","X",4 ,"X", 6 ,"O","O"], bestSpot = miniMax(origBoard, aiPlayer);
//
// function miniMax(newBoard, player){
//     var availSpots = emptyIndexes(newBoard), i;
//     if (winning(newBoard, huPlayer)){
//         return {score:-10};
//     }
//     else if (winning(newBoard, aiPlayer)){
//         return {score:10};
//     }
//     else if (availSpots.length === 0){
//         return {score:0};
//     }
//     var moves = [];
//     for (i = 0; i < availSpots.length; i++){
//         var move = {};
//         move.index = newBoard[availSpots[i]];
//         newBoard[availSpots[i]] = player;
//         if (player === aiPlayer){
//             var result = miniMax(newBoard, huPlayer);
//             move.score = result.score;
//         }
//         else{
//             var result = miniMax(newBoard, aiPlayer);
//             move.score = result.score;
//         }
//         newBoard[availSpots[i]] = move.index;
//         moves.push(move);
//     }
//
//     var bestMove;
//     if(player === aiPlayer){
//         var bestScore = -10000;
//         for(i = 0; i < moves.length; i++){
//             if(moves[i].score > bestScore){
//                 bestScore = moves[i].score;
//                 bestMove = i;
//             }
//         }
//     } else{
//         var bestScore = 10000;
//         for(i = 0; i < moves.length; i++){
//             if(moves[i].score < bestScore){
//                 bestScore = moves[i].score;
//                 bestMove = i;
//             }
//         }
//     }
//     return moves[bestMove];
// }
//
// function emptyIndexes(board){
//     return  board.filter(s => s !== "O" && s !== "X");
// }
//
// function winning(board, player){
//     if (
//         (board[0] === player && board[1] === player && board[2] === player) ||
//         (board[3] === player && board[4] === player && board[5] === player) ||
//         (board[6] === player && board[7] === player && board[8] === player) ||
//         (board[0] === player && board[3] === player && board[6] === player) ||
//         (board[1] === player && board[4] === player && board[7] === player) ||
//         (board[2] === player && board[5] === player && board[8] === player) ||
//         (board[0] === player && board[4] === player && board[8] === player) ||
//         (board[2] === player && board[4] === player && board[6] === player)
//     ) {
//         return true;
//     } else {
//         return false;
//     }
// }