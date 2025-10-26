import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import MovieContextWrapper from "../shared/context/MovieContext/MovieContextWrapper";
import Layout from "../shared/components/Layout/Layout";

const RootLayout = () => (
  <>
    <MovieContextWrapper>
      <Layout>
        <div>
          <Link to="/">Home</Link>
          <Link to="/movie">Movie</Link>
        </div>
        <hr />
        <Outlet />
      </Layout>
    </MovieContextWrapper>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({
  component: RootLayout,
});
