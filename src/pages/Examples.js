import React, { useState } from 'react';
import { TodoExample, ExampleChooser } from '../components';
import { PageHeader } from '../atoms/styled';

const ExamplesPage = () => {
  const [example, setExample] = useState();
  const examples = ['TODO'];

  return (
    <>
      <PageHeader>Examples</PageHeader>
      <ExampleChooser examples={examples} current={example} setExample={setExample} />
      {example === 'TODO' && <TodoExample />}
    </>
  );
};

export default ExamplesPage;
