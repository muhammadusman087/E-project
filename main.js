document.getElementById("Nav").innerHTML =  `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/logo.jpg" alt="" class="image">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="about us.html">about us</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle active" href="meals.html" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                meals
                            </a>
                            <ul class="dropdown-menu active" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item " href="regular.html">regular</a></li>
                                <li><a class="dropdown-item " href="lunch.html">lunch</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item " href="snacks.html">snacks</a></li>
                                <li><a class="dropdown-item " href="desert.html">desert</a></li>
                                <li><a class="dropdown-item " href="beverages.html">beverages</a></li>
                            </ul>
                        </li>
                        <a class="nav-link active" href="gallery.html">gallery</a>
                        <a class="nav-link active" href="awards.html">awards</a>
                        <a class="nav-link active" href="catering.html">catering</a>
                        <a class="nav-link active" href="recipe of the month.html">recipe of the month</a>
                        <a class="nav-link active" href="contuct us.html">contact us</a>
                        <a class="nav-link active" href="feedback.html">feedback</a>
                    </ul>
    
                </div>
            </div>
        </nav>
    `
  ;