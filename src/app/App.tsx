import { useRemark } from '@/hooks/useRemark';
import React, { useEffect } from 'react'

const App: React.FC = () => {
  const { element, setMdText } = useRemark();

  useEffect(() => {
    setMdText("## 👀 Overviewzwzw");
  }, []);

  return (
    <div>
      {element}
    </div>
  )
}

export default App
