import React from "react";

var Items = (props) => {
  return (
    <React.Fragment>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </React.Fragment>
  );
};

export default Items;