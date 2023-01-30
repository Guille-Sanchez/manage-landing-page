import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-w-full flex flex-col items-center p-7 pt-0">
        <div
          className="translate-x-1/3 -translate-y-1/3  flex justify-center bg-scroll bg-right-top relative bg-no-repeat bg-contain"
          style={{ backgroundImage: `url("/bg-tablet-pattern.svg")` }}
        >
          <img
            className="h-80 w-80  -translate-x-1/3 translate-y-1/3"
            src="/illustration-intro.svg"
            alt="Graphs of time managment"
          />
        </div>
        <section>
          <h2>Bring everyone together to build better products.</h2>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view
          </p>
          <button>Get Started</button>
        </section>

        <section>
          <h2>What's different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our SOftware is tailor-made for modern digital product
            teams.
          </p>
        </section>

        <section>
          <div>
            <p>01</p>
            <h2>Track company-wide progress</h2>
          </div>
          <p>
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </section>

        <section>
          <div>
            <p>02</p>
            <h2>Advanced built-in reports</h2>
          </div>
          <p>
            Set internal delivery estimates and track progress toward company
            goals. Our Customisable dashboard helps you build out reports you
            need to keep key stakeholders informed.
          </p>
        </section>

        <section>
          <div>
            <p>03</p>
            <h2>Everything you need in one place</h2>
          </div>
          <p>
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </section>

        <section>
          <h2>What they've said</h2>
          <figure>
            <img src="/avatar-ali.png" alt="Ali Bravo" />
            <figcaption>
              <b>Ali Bravo</b>
            </figcaption>
            <blockquote>
              We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.
            </blockquote>
          </figure>
          <div></div>
        </section>
        <section>
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
