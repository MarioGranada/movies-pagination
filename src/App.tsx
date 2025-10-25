import Layout from "./shared/components/Layout/Layout";
import RootPage from "./Pages";
import MovieContextWrapper from "./shared/context/MovieContext/MovieContextWrapper";

function App() {
  return (
    <MovieContextWrapper>
      <Layout>
        <RootPage />
      </Layout>
    </MovieContextWrapper>
  );
}

export default App;
