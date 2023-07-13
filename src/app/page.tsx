import styles from './page.module.css'
export default function index() {
  return (
    <article className={`${styles['markdown-body']} ${styles['entry-content']} ${styles['container-lg']}`} itemProp="text"><h1 tabIndex={-1} dir="auto"><a id="user-content-project-running-method-english" className="anchor" aria-hidden="true" href="#project-running-method-english"><svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Project Running Method (English)</h1>
      <h2 tabIndex={-1} dir="auto"><a id="user-content-prerequisites" className="anchor" aria-hidden="true" href="#prerequisites"><svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Prerequisites</h2>
      <p dir="auto">Before running this project, ensure the following are installed:</p>
      <ol dir="auto">
        <li>Node.js v13</li>
        <li>Yarn</li>
        <li>Cypress</li>
      </ol>
      <h2 tabIndex={-1} dir="auto"><a id="user-content-install-and-build" className="anchor" aria-hidden="true" href="#install-and-build"><svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Install and Build</h2>
      <ol dir="auto">
        <li>Install Libraries: <code>yarn install</code></li>
        <li>Build: <code>yarn build</code></li>
        <li>Start: <code>yarn start</code></li>
        <li>Or, you can run the dev server: <code>yarn dev</code></li>
      </ol>
      <h2 tabIndex={-1} dir="auto"><a id="user-content-running-with-docker" className="anchor" aria-hidden="true" href="#running-with-docker"><svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Running with Docker</h2>
      <p dir="auto">If Docker is installed, the project can be run using the Docker file:</p>
      <ol dir="auto">
        <li>Docker Build: <code>docker build -t app .</code></li>
        <li>Start Docker Container: <code>docker run -p 3000:3000 app</code></li>
      </ol>
      <h2 tabIndex={-1} dir="auto"><a id="user-content-testing" className="anchor" aria-hidden="true" href="#testing"><svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Testing</h2>
      <ol dir="auto">
        <li>Build: <code>yarn build</code></li>
        <li>Run server <code>yarn start</code> and in new terminal run  <code>yarn run cypress</code> open Cypress and select a test:</li>
        <li>To run all tests: <code>yarn run test</code> (the &quot;test&quot; script runs the server and Cypress concurrently)</li>
      </ol>
      <h2 tabIndex={-1} dir="auto"><a id="user-content-layout" className="anchor" aria-hidden="true" href="#layout"><svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Layout</h2>
      <ul className="contains-task-list">
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> It should operate differently based on a screen width of 768px.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> The header must be fixed at the top regardless of scrolling.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> The content area should scroll vertically.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> The selected menu should be highlighted in color.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> The initial menu is the user list.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> For screens with width less than or equal to 768px:
          <ul className="contains-task-list">
            <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> A menu icon should appear in the header.</li>
            <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> When the menu icon is clicked, the menu should appear on the left of the screen, overlaying the content.</li>
            <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> The menu should disappear when you click outside the menu.</li>
          </ul>
        </li>
      </ul>
      <h2 tabIndex={-1} dir="auto"><a id="user-content-user-list" className="anchor" aria-hidden="true" href="#user-list"><svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>User List</h2>
      <ul className="contains-task-list">
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> User data acquisition refers to the address displayed on the page.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> The table header must be fixed at the top of the table.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> The table should fill the height and width of the content.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> Scrolling should not occur due to the table in the content.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> When a mouse hovers over a row in the table, it should be highlighted in color.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> When the last content of the table is exposed on the screen, a new user list should be added at the bottom.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> There is no limit to the number of user lists.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> When you press Add User, you should be able to add a new user through a dialog.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> User information does not need to be stored separately on the server. It doesn&apos;t matter if the data is volatile.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> The Add User dialog should work on top of all screens.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> While there is a dialog, the entire screen should not scroll.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> Required input must always be entered. If not entered, an error message should be printed below the input box.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> If you click outside the dialog, the dialog ends and no value is added.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> If there is no required input value, the Add button should be disabled.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> When the Add button is clicked, user information should be added at the top of the table.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> If you press the Cancel button, the dialog ends without adding a user.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> After cancellation, if you click the Add User button again and output the dialog, a dialog with an empty value should be printed again.</li>
      </ul>
      <h2 tabIndex={-1} dir="auto"><a id="user-content-image-list" className="anchor" aria-hidden="true" href="#image-list"><svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Image List</h2>
      <ul className="contains-task-list">
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> The acquisition of necessary images refers to the address displayed on the page.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> Images should have a random size of width 100px, height 100px ~ 400px (in units of 100px).</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> Each image must be arranged in 3 rows without as much gap as possible.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> Initially, more than 25 images should be loaded.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> Before the bottom image appears, an additional 25 images should be loaded and placed on the screen.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> There is no limit to the number of images that can be placed.</li>
      </ul>
      <h2 tabIndex={-1} dir="auto"><a id="user-content-canvas" className="anchor" aria-hidden="true" href="#canvas"><svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Canvas</h2>
      <ul className="contains-task-list">
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> It must be implemented using HTML canvas.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> You cannot use libraries that assist HTML canvas manipulation.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> Draw 3 circles on the canvas.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> Each circle must be draggable.</li>
        <li className="task-list-item"><input type="checkbox" id="" disabled className="task-list-item-checkbox" checked /> When multiple circles overlap, the circle closest to the position of the circle center and the mouse pointer is dragged.</li>
      </ul>
    </article>
  )
}
