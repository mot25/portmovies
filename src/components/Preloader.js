export default function Preloader() {
  return (
    <div>
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
      <h1>Фильма нет в базе данных</h1>
    </div>
  );
}
