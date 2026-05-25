import "./styles.css";

const Paginador = ({
  next,
  prev,
  page,
  setPage,
  totalPages,
}: {
  next: boolean;
  prev: boolean;
  page: number;
  setPage: (page: number) => void;
  totalPages?: number;
}) => {
  return (
    <div className="pagContainer">
      {page - 3 > 0 && (
        <div className="prevpagContainer" onClick={() => setPage(page - 3)}>
          <p>{page - 3}</p>
        </div>
      )}

      {page - 2 > 0 && (
        <div className="prevpagContainer" onClick={() => setPage(page - 2)}>
          <p>{page - 2}</p>
        </div>
      )}

      {page - 1 > 0 && (
        <div className="prevpagContainer" onClick={() => setPage(page - 1)}>
          <p>{page - 1}</p>
        </div>
      )}

      <h1>{page}</h1>

      {page + 1 <= totalPages! && (
        <div className="nextpagContainer" onClick={() => setPage(page + 1)}>
          <p>{page + 1}</p>
        </div>
      )}

      {page + 2 <= totalPages! && (
        <div className="nextpagContainer" onClick={() => setPage(page + 2)}>
          <p>{page + 2}</p>
        </div>
      )}

      {page + 3 <= totalPages! && (
        <div className="nextpagContainer" onClick={() => setPage(page + 3)}>
          <p>{page + 3}</p>
        </div>
      )}
    </div>
  );
};

export default Paginador;
