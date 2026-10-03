import { useState } from 'react';

function Content() {
  // Keep the opening time in state; this page does not need a timer.
  const [openedAt] = useState(() => new Date());

  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {openedAt.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;
