import { createElement, Fragment, ReactElement, useEffect, useState } from "react";
import { remark } from 'remark'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'

export const useRemark = (text?: string) => {
  const [mdText, setMdText] = useState(text ?? "");
  const [element, setElement] = useState<ReactElement>();

  useEffect(() => {
    remark()
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .use(rehypeReact, { createElement, Fragment })
      .process(mdText)
      .then((value) => {
        setElement(value.result)
      }).catch(err => { });
  }, [mdText])

  return { element, setMdText }

}