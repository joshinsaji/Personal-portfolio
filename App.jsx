import React from 'react';

const Avatar = ({src}) => (
  <div className="avatar-wrap" role="img" aria-label="Profile photo">
    <img className="avatar" src={src} alt="Profile photo" />
  </div>
);

export default function App(){ 
  const avatar = process.env.REACT_APP_AVATAR || '/assets/avatar.jpg';
  return (
    <div>
      <canvas id="matrixCanvas"></canvas>
      <div className="app" role="application">
        <aside className="sidebar" aria-label="Sidebar">
          <div>
            <div className="brand">Joshin Saji</div>
            <div className="subtitle">Full Stack Developer</div>
          </div>
          <nav className="nav" aria-label="Main navigation">
            <a className="active" href="#">Profile</a>
            <a href="#">Experience</a>
            <a href="#">Education</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Certificates</a>
          </nav>
          <div className="footer-links">v1 • Matrix Theme</div>
        </aside>
        <main className="main">
          <div className="leftcol">
            <Avatar src={avatar} />
            <div className="mini-stats">
              <div>⭐ 120</div>
              <div>Repos 18</div>
            </div>
          </div>
          <section className="rightcol">
            <div className="hero">
              <div>
                <h1 className="name">Joshin Saji</h1>
                <div className="role">Full Stack Developer</div>
              </div>
            </div>
            <div className="cards" aria-live="polite">
              <div className="card"><div className="label">Resume:</div><div className="value"><a className="btn" href="#">View Resume</a></div></div>
              <div className="card"><div className="label">Email:</div><div className="value">youremail@example.com</div></div>
              <div className="card"><div className="label">LinkedIn:</div><div className="value">linkedin.com/in/your-profile</div></div>
              <div className="card"><div className="label">GitHub:</div><div className="value">github.com/your-username</div></div>
            </div>
            <div className="cta">
              <a className="btn" href="#">Next: Experience →</a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
