import {Linke} from 'react-router-dom'
export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">Company name</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><Link class="nav-link" to="Features">Features</Link></li>
                <li class="nav-item"><Link class="nav-link" to="Enterprise">Enterprise</Link></li>
                <li class="nav-item"><Link class="nav-link" to="Support">Support</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/">Pricing</Link></li>
       
            </ul>
        </div>
    </div>
</nav>
  )
}
