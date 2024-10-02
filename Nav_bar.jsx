import { Link } from "react-router-dom";

function Nav_bar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "fff" }}>
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img src="media/logo.svg" style={{ width: "25%" }} />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to={"/signup"}>Signup</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to={"/about"}>About</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to={"/product"}>Product</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to={"/pricing"}>Pricing</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to={"/support"}>Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav_bar;