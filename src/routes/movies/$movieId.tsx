import { createFileRoute } from "@tanstack/react-router";
import Movie from "../../shared/pagesComponents/Movies/Movie";

export const Route = createFileRoute("/movies/$movieId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { movieId } = Route.useParams();
  return <Movie id={movieId} />;
}
