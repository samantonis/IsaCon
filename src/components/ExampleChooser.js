import React from 'react';
import styled from 'styled-components';

const ExampleChooser = ({ current, examples, setExample, className }) => (
  <>
    <h2>Please select an example</h2>
    <ul className={className}>
      {examples.map(example => (
        <li
          className={current === example && 'active'}
          key={example}
          onClick={() => setExample(example)}
        >
          {example.toLowerCase()}
        </li>
      ))}
    </ul>
  </>
);

export default styled(ExampleChooser)`
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    padding: 10px;
    text-transform: uppercase;
    font-weight: 900;
    &.active {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;
