import CrossIcon from "./components/icons/Crosslcon";
import MoonIcon from "./components/icons/MoonIcon";
const App = () => {
  return (
    <div className="bg-gray-300 bg-[url('./src/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between mb-9">
          <h1 className="uppercase font-semibold tracking-[0.3em] text-white text-3xl">
            Todo
          </h1>
          <button><MoonIcon fidll="#0ff" className="fill-red-500"/></button>
        </div>
        <form className="bg-white rounded-md overflow-hidden flex gap-4 items-center py-4 px-4">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="Create a new todo..."
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="rounded-md bg-white [&>article]:p-4">
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">
              Complete online Javascrip curse in bluuwed
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="text-gray-600 grow">
              Complete online Javascrip curse in bluuwed
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="text-gray-600 grow">
              Complete online Javascrip curse in bluuwed
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <section className="flex justify-between py-4 px-4">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 rounded-md bg-white">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <p className="mt-8 text-center">Drag and drop to reorder list</p>
    </div>
  );
};

export default App;
