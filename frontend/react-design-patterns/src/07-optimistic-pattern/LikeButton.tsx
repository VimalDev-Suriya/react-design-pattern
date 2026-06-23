import { startTransition, useOptimistic, useState } from 'react';

const LikeButton = (props) => {
  const { initialLike } = props;

  const [likes, setLikes] = useState(initialLike);
  // * Always remember that the optimistic hook get the initial value from the existing actual state.
  const [optimisticValue, setOptimisticValue] = useOptimistic(
    likes,
    (currentState, value) => currentState + value,
  );

  const dummyApiCall = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // console.log('Promise call successfull');

    if (Math.random() > 0.2) throw new Error('API Failed');

    return { success: true };
  };

  const handleLike = async () => {
    setOptimisticValue(1);

    try {
      await dummyApiCall();
      setLikes((prev) => prev + 1);
    } catch (error) {
      console.log(error);

      // * If we triggere the re-render then the optmisitic value will reset into original value
      // * Sanitizing the optmistic value
      //   setOptimisticValue(likes);
      setLikes((prev) => prev);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          startTransition(async () => handleLike());
        }}
      >
        Like {optimisticValue}
      </button>
    </div>
  );
};

export default LikeButton;
