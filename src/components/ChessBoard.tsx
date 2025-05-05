import { Color, PieceSymbol, Square, SQUARES } from "chess.js";
import { useState } from "react";

const ChessBoard = ({
  chess,
    board,
  socket, 
    setBoard
}: {
  chess: any
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][],
  socket: WebSocket;
  setBoard: any
    }) => {
    
    const [from, setFrom] = useState<Square | null>()
  const [to, setTo] = useState<Square | null>();
  console.log(socket)
    
  return (
    <div className="text-white-200 ">
      {board.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((square, j) => {
              const squareRepresentation = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square;
              return (
                <div
                  onClick={() => {
                    if (!from) {
                      setFrom(squareRepresentation);
                      console.log(from);
                    } else {
                      setTo(square?.square ?? null);
                      socket.send(
                        JSON.stringify({
                          type: "move",
                          move: {
                            from,
                            to: squareRepresentation,
                          },
                        })
                      );
                      setFrom(null);
                      chess.move({
                        from,
                        to: squareRepresentation,
                      });
                      setBoard(chess.board());
                    }
                  }}
                  key={j}
                  className={`w-18 h-18 ${
                    (i + j) % 2 === 0 ? "bg-[#739552]" : "bg-[#EBECD0]"
                  }`}
                >
                  <div className="flex justify-center h-full items-center">
                    {square ? (
                      <img
                        className="w-20"
                        src={`/img/${
                          square?.color === "b"
                            ? square?.type
                            : `${square?.type?.toUpperCase()} copy`
                        }.png`}
                      />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ChessBoard;
