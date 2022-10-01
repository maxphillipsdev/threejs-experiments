import Tab from "../components/Tab";

const NotFound = () => {
  return (
    <>
      <section className="404 flex flex-col items-center space-y-2">
        <h1 className="animate-bounce text-4xl font-bold">
          404 - Page Not Found
        </h1>
        <Tab text="Go Home" href="/" />
      </section>
    </>
  );
};

export default NotFound;
