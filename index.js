function App() {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch("./books.json");
      const json = await response.json();
      console.log("json: ", json);
      json.books.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
      setData(json);
      setLoaded(true);
    }
    getData();
  }, []);
  console.log("loaded: ", loaded, "data: ", data);

  function loadList() {
    setLoad(!load);
  }

  return (
    <>
      <br />
      <div className="container">
        {!load && (
          <button
            type="button"
            class="btn btn-primary"
            onClick={loadList}
            style={{ marginLeft: "45%" }}
          >
            List
          </button>
        )}
        {load && (
          <button
            type="button"
            class="btn btn-primary"
            onClick={loadList}
            style={{ marginLeft: "45%" }}
          >
            Cards
          </button>
        )}
      </div>
      <br />
      <div className="container">
        {loaded &&
          !load &&
          data.books.map((book, index) => <Book data={book} key={index} />)}
      </div>
      <div className="container">
        {loaded &&
          load &&
          data.books.map((book, index) => <List data={book} key={index} />)}
      </div>
      <div className="container">
        {!load && (
          <button
            type="button"
            class="btn btn-primary"
            onClick={loadList}
            style={{ marginLeft: "45%", marginBottom: "10px" }}
          >
            List
          </button>
        )}
        {load && (
          <button
            type="button"
            class="btn btn-primary"
            onClick={loadList}
            style={{ marginLeft: "45%", marginBottom: "10px" }}
          >
            Cards
          </button>
        )}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
