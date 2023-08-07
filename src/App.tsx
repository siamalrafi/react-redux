import { decrement, increment, incrementByAmount, decrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
   const { count } = useAppSelector((state) => state.counter);
   const dispatch = useAppDispatch();
   return (
      <div className="m-24 flex gap-5 justify-center">
         <button className="bg-red-500 text-center text-gray-900" onClick={() => dispatch(increment())}>
            Increment
         </button>
         <button className="bg-red-500 text-center text-gray-900" onClick={() => dispatch(incrementByAmount(500))}>
            Double
         </button>
         <div>
            <p>{count}</p>
         </div>
         <button className="bg-red-500 text-center text-gray-900" onClick={() => dispatch(decrement())}>
            Decrement
         </button>
         <button className="bg-red-500 text-center text-gray-900" onClick={() => dispatch(decrementByAmount(50))}>
            Double
         </button>
      </div>
   );
};

export default App;
