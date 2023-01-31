import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-w-full p-7 pt-0">
        <div className="flex w-screen justify-center">
          <img
            className="block h-80 w-80"
            src="/illustration-intro.svg"
            alt="Graphs of time managment"
          />
        </div>
        <section>
          <h2 className="text-center text-3xl font-extrabold text-gray-800">
            Bring everyone together to build better products.
          </h2>
          <p className="p-4 text-center text-xs font-semibold text-gray-900 text-opacity-40">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center">
            <button className="rounded-full bg-orange-600 p-2 pl-6 pr-6 text-sm font-semibold text-slate-200">
              Get Started
            </button>
          </div>
        </section>

        <section>
          <h2 className="pr-8 pl-8 pt-20 pb-2 text-center text-2xl font-extrabold text-gray-800">
            What's different about Manage?
          </h2>
          <p className="p-4 text-center text-xs font-semibold text-gray-900 text-opacity-40">
            Manage provides all the functionality your team needs, without the
            complexity. Our Software is tailor-made for modern digital product
            teams.
          </p>
        </section>

        <section className="pt-4">
          <h2 className="-mr-10 rounded-l-full bg-orange-300 bg-opacity-25 pt-1 pb-1 font-extrabold text-slate-800">
            <span className="rounded-full bg-orange-600 pl-4 pr-4 pt-1 pb-1 text-center text-slate-200">
              01
            </span>{" "}
            Track company-wide progress
          </h2>

          <p className="pt-2 text-xs text-gray-900 text-opacity-40">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </section>

        <section className="pt-4">
          <h2 className="-mr-10 rounded-l-full bg-orange-300 bg-opacity-25 pt-1 pb-1 font-extrabold text-slate-800">
            <span className="rounded-full bg-orange-600 pl-4 pr-4 pt-1 pb-1 text-center text-slate-200">
              02{" "}
            </span>
            Advanced built-in reports
          </h2>
          <p className="pt-2 text-xs text-gray-900 text-opacity-40">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out reports you
            need to keep key stakeholders informed.
          </p>
        </section>

        <section className="pt-4">
          <h2 className="-mr-10 rounded-l-full bg-orange-300 bg-opacity-25 pt-1 pb-1 font-extrabold text-slate-800">
            <span className="rounded-full bg-orange-600 pl-4 pr-4 pt-1 pb-1 text-center text-slate-200">
              03{" "}
            </span>
            Everything you need in one place
          </h2>
          <p className="pt-2  text-xs text-gray-900 text-opacity-40">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </section>

        <section>
          <h2 className="pr-8 pl-8 pt-20 pb-2 text-center text-2xl font-extrabold text-gray-800">
            What they've said
          </h2>
          <figure className="flex flex-col place-items-center">
            <img className="w-16" src="/avatar-ali.png" alt="Ali Bravo" />
            <figcaption>
              <b>Ali Bravo</b>
            </figcaption>
            <blockquote className="pt-2  text-xs text-gray-900 text-opacity-40">
              We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.
            </blockquote>
          </figure>
          <div className="flex justify-center">
            <button className="rounded-full bg-orange-600 p-2 pl-6 pr-6 text-sm font-semibold text-slate-200">
              Get Started
            </button>
          </div>
        </section>

        <section className="pt-10">
          <h2>Simplify how your team works today.</h2>
          <button>Get Started</button>
        </section>
      </main>
      <footer>
        <form action="">
          <input type="text" />
          <button></button>
        </form>
        <div>
          <button>Home</button>
          <button>Pricing</button>
          <button>Products</button>
          <button>About Us</button>
          <button>Careers</button>
          <button>Commnity</button>
          <button>Privacy Policy</button>
        </div>
        <div>
          <img src="/icon-facebook.svg" alt="Facebook Logo" />
          <img src="/icon-youtube.svg" alt="Youtube Logo" />
          <img src="/icon-twitter.svg" alt="Twitter Logo" />
          <img src="/icon-pinterest.svg" alt="Pinterest Logo" />
          <img src="/icon-instagram" alt="Intagram Logo" />
        </div>
        <img src="/logo.svg" alt="" />
        <p>Copyright 2020. All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
