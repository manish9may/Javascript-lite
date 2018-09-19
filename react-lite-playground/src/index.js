import {render} from "./react"

const list = `<ul className="some-list">
  <li className="some-list__item">One</li>
  <li className="some-list__item">Two</li>
</ul>`;
render(list, document.getElementById('root'));