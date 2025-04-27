import { useEffect, useState } from "react"
import Button from "../components/Button"
import ChessBoard from "../components/ChessBoard"
import { useSocket } from "../hooks/useSocket"
import { Chess } from "chess.js"

const Game = () => {
  const socket = useSocket()
  const [chess, setChess] = useState(new Chess())
  const [board, setBoard] = useState(chess.board())
  const [started, setStarted] = useState(false)


  useEffect(() => {
    if (!socket) {
      return
    }

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data)
      console.log(message)
      switch (message.type) {
        case "init_game":
          setStarted(true)
          // setChess(new Chess())
          setBoard(chess.board())
          console.log("game initialized")
          break;
        case "move":
          const move = message.payload
          chess.move(move)
          setBoard(chess.board())
          console.log("move made")
          break;
        case "game over":
          console.log("game over")
          break;
      }
    }
  }, [socket])

  if (!socket) return <div>Connecting...</div>
  
  return (
    <div className="justify-center flex">
      <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-6 gap-4 w-full">
          <div className="col-span-4 w-full flex justify-center">
            <ChessBoard chess={chess} socket={socket} setBoard={setBoard} board={board} />
          </div>
          <div className="col-span-2 bg-green-200 w-full flex justify-center items-start pt-10 rounded">
           { !started && <Button  text="Play" onClick={() => {
              socket.send(JSON.stringify({
                type: "init_game",
              }))
            }} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game