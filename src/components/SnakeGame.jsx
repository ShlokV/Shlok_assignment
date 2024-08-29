
import { useState, useRef, useEffect } from 'react';
import { IoFastFoodSharp } from 'react-icons/io5';

const WIDTH = 20;
const HEIGHT = 20;
const CELL_SIZE = 20; 

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 5, y: 5 }]);
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [direction, setDirection] = useState('RIGHT');
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef();
  const directionRef = useRef(direction);

  const moveSnake = () => {
    const head = snake[0];
    const newHead = { ...head };

    switch (directionRef.current) {
      case 'UP':
        newHead.y -= 1;
        break;
      case 'DOWN':
        newHead.y += 1;
        break;
      case 'LEFT':
        newHead.x -= 1;
        break;
      case 'RIGHT':
        newHead.x += 1;
        break;
      default:
        break;
    }

    if (newHead.x < 0 || newHead.x >= WIDTH || newHead.y < 0 || newHead.y >= HEIGHT || snake.some(part => part.x === newHead.x && part.y === newHead.y)) {
      setIsGameOver(true);
      clearInterval(intervalRef.current);
      return;
    }

    const newSnake = [newHead, ...snake.slice(0, -1)];
    setSnake(newSnake);

    if (newHead.x === food.x && newHead.y === food.y) {
      setSnake([food, ...snake]);
      setFood(generateRandomFood());
    }
  };

  const generateRandomFood = () => {
    let newFood;
    do {
      newFood = { x: Math.floor(Math.random() * WIDTH), y: Math.floor(Math.random() * HEIGHT) };
    } while (snake.some(part => part.x === newFood.x && part.y === newFood.y));
    return newFood;
  };

  const startGame = () => {
    setIsGameOver(false);
    setIsPaused(false);
    setSnake([{ x: 5, y: 5 }]);
    setFood(generateRandomFood());
    setDirection('RIGHT');
  };

  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    if (isGameOver || isPaused) return;

    intervalRef.current = setInterval(moveSnake, 200);

    return () => clearInterval(intervalRef.current);
  }, [snake, direction, isGameOver, isPaused]);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (isPaused || isGameOver) return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [direction, isPaused, isGameOver]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div
        className="relative bg-gray-800"
        style={{ width: WIDTH * CELL_SIZE, height: HEIGHT * CELL_SIZE }}
      >
        {snake.map((part, index) => (
          <div
            key={index}
            className="absolute bg-green-500"
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              left: part.x * CELL_SIZE,
              top: part.y * CELL_SIZE,
            }}
          />
        ))}
        <div
          className="absolute flex items-center justify-center"
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
          }}
        >
          <IoFastFoodSharp className="text-yellow-500" size={CELL_SIZE} />
        </div>
        {isGameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <h1 className="text-white text-2xl">Game Over</h1>
          </div>
        )}
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={togglePause}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button
          onClick={startGame}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default SnakeGame;
