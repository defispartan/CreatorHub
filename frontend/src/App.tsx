function App() {
  return (
    <>
      <h1>CreatorHub</h1>
      <div className="card">
        <p className="text">
          Listening for backend at {import.meta.env.VITE_BACKEND_PATH}
        </p>
      </div>
    </>
  );
}

export default App;
