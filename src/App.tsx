import React, { createElement, Fragment, ReactElement, useEffect, useState } from 'react'
import { remark } from 'remark'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState<ReactElement>(<></>)

  useEffect(() => {
    tfMarkdown();
  }, [])

  const tfMarkdown = () => {
    return remark().use(remarkGfm).use(remarkRehype).use(rehypeStringify).use(rehypeReact, { createElement, Fragment}).process("## 👀 Overview").then((value) => {
      setText(value.result)
    }).catch(err => <></>)
  }

  return (
    <div>
      <header>
        <p>Hello Electron + Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
      <div>
        {text}
      </div>
    </div>
  )
}

export default App
