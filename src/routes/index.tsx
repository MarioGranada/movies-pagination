import { createFileRoute } from "@tanstack/react-router";
import Root from "../shared/pagesComponents/Root";

const Index = () => <Root />;

export const Route = createFileRoute("/")({
  component: Index,
});
