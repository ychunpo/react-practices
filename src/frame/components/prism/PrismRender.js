import React from "react";
import { Wrapper, Pre, Line, LineNo, LineContent } from "./PrismStyle";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

const PrismRender = ({ code }) => (
  <Wrapper>
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  </Wrapper>

);

export default PrismRender;
