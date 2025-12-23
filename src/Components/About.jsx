export default function About() {
  return (
    <main className="container">
      <section className="card about-card">
        <h2>About StudyZen</h2>
        <p>
          StudyZen is a minimal student planner built with React, perfect for 
          practicing front-end skills and helping manage short study sessions.
        </p>

        <h3>Features</h3>
        <ul>
          <li>Planner: add tasks with duration and start sessions</li>
          <li>Pomodoro timer: start / pause / reset</li>
          <li>To-do list saved in the browser</li>
          <li>Motivational quotes and quick tips</li>
        </ul>

        <h3>About Me</h3>
        <p>Hi!! , I'm Priyali. I built StudyZen to practice React and create a simple tool.</p>
      </section>
    </main>
  );
}