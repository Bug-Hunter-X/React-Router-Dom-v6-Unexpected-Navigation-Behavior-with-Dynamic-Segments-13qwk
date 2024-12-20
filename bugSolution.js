```javascript
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MyComponent() {
  const query = useQuery();
  const id = query.get('id');
  // ... rest of your component
}
```