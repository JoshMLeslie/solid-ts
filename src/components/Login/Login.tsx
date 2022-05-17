import * as React from 'react';
import * as SolidService from '../../service/solid-service';

const Login: React.FC = () => {
  return (
    <>
      <header>
        <h2>Getting Started</h2>
        <h3>with Inrupt JavaScript Client Libraries</h3>
      </header>
      <section id="login" className="panel">
        <div className="row">
          <label id="labelLogin" htmlFor="btnLogin">
            1. Click the button to log into&nbsp;
            <span id="solid_identity_provider">
              <a target="_blank" href={SolidService.SOLID_IDENTITY_PROVIDER}>
                {SolidService.SOLID_IDENTITY_PROVIDER}
              </a>
            </span>
          </label>
           &nbsp;
          <button name="btnLogin" id="btnLogin" onClick={SolidService.login}>
            Login
          </button>
          <p id="labelStatus" className="labelStatus"></p>
        </div>
      </section>

      <div id="read" className="panel">
        <div className="row">
          <form id="writeForm" onSubmit={SolidService.writeProfile}>
            <label id="writelabel" htmlFor="input_name">
              2. Write your name:{' '}
            </label>
            <input
              type="text"
              id="input_name"
              name="name"
              placeholder="Your name here"
            />
            <button type="submit">Write to Profile</button>
          </form>
        </div>

        <dl className="display">
          <dt>Writing status:&nbsp</dt>
          <dd id="labelWriteStatus" className="labelStatus">
            ...not written yet...
          </dd>
        </dl>
      </div>

      <div id="read" className="panel">
        <div className="row">
          <form id="readForm" onSubmit={SolidService.readProfile}>
            <label id="readlabel" htmlFor="webID">
              3. Read back name (anyone's!) from their WebID:
            </label>
            <input
              type="url"
              id="webID"
              name="webID"
              placeholder="...not logged in yet - but enter any WebID to read from its profile..."
            />
            <button type="submit" name="btnRead" id="btnRead">
              Read Profile
            </button>
          </form>
        </div>
        <dl className="display">
          <dt>Formatted Name (FN) read from Pod:&nbsp</dt>
          <dd id="labelFN">...not read yet...</dd>
        </dl>
      </div>
    </>
  );
};

export default Login;
