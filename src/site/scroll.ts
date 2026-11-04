// The app uses HashRouter, so a plain "#id" link would change the route instead of scrolling.
export const scrollToId = (id: string) => (e: { preventDefault: () => void }) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};
