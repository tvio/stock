<template>
    <nav class="navbar navbar-dark bg-primary">
        
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Stock Trader</router-link>
          

            <div class="collapse navbar-collapse">
                <ul class=" navbar-nav mr-auto">
                  
                    <router-link to="/portfolio" activeClass="nav-item active" tag="li"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
                    </ul>
                <strong class="navbar-text navbar-right">Funds: </strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">End Day</a></li>
                    <li
                            class="dropdown">
                          
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Save Data</a></li>
                            <li><a href="#">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
   
</script>