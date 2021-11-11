import React from 'react';

const App = () => {
  // get and display some test data from the server
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    fetch("/test")
      .then((response) => response.json())
      .then((data) => setData(data.user));
  }, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
