// Create a className for the element
function List({ data }) {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Title: {data.title}</strong>
        </li>
        <li className="list-group-item">Subtitle: {data.subtitle}</li>
        <li className="list-group-item">Author: {data.author}</li>
        <li className="list-group-item">Publisher: {data.publisher}</li>
        <li className="list-group-item">Description: {data.description}</li>
        <li className="list-group-item">Published: {data.published}</li>
        <li className="list-group-item">Pages: {data.pages}</li>
        <li className="list-group-item">
          Website:{" "}
          <a target="_blank" href={data.website}>
            {data.website}
          </a>
        </li>
        <li className="list-group-item">ISBN: {data.isbn}</li>
      </ul>
      <br />
    </>
  );
}
