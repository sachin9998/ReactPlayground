import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBird, likeBird } from "../store/birdSlice";

const BirdList = () => {
  const birds = useSelector((state) => state.birds.birds);
  const [birdName, setBirdName] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addBird(birdName));
    setBirdName("");
  };

  return (
    <div>
      <h1>Bird List</h1>

      <div>
        <p>Add Bird</p>
        <input
          type="text"
          value={birdName}
          onChange={(e) => setBirdName(e.target.value)}
        />

        <button onClick={handleAdd}>Add</button>
      </div>

      <div>
        <ul>
          {birds.map((bird, index) => {
            return (
              <li key={index}>
                {bird.name}

                <div>
                  <span>Likes: {bird.likes}</span>
                  <button onClick={() => dispatch(likeBird(bird.name))}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BirdList;
