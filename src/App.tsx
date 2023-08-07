import { decrement, increment } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
   const { count } = useSelector((state: RootState) => state.counter);
   const dispatch = useDispatch();

   return (
      <div className="m-24 flex gap-5 justify-center">
         <button className="bg-red-500 text-center text-gray-900" onClick={() => dispatch(increment())}>
            Increment
         </button>
         <div>
            <p>{count}</p>
         </div>
         <button className="bg-red-500 text-center text-gray-900" onClick={() => dispatch(decrement())}>
            Decrement
         </button>
      </div>
   );
};

export default App;
