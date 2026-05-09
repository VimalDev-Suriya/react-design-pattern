import { useTheme } from '../06-context-pattern/hooks/useTheme';
import LikeButton from './LikeButton';

const OptimisticContainer = () => {
  const { isDark, toggleDark } = useTheme();

  return (
    <div
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
        height: '100%',
      }}
    >
      <button onClick={toggleDark}>Toggle Theme</button>
      <LikeButton initialLike={0} />
    </div>
  );
};

export default OptimisticContainer;
