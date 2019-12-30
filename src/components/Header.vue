<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <ul class="navbar-nav mr-auto">
      <router-link to="/portfolio" activeClass="nav-item active" tag="li">
        <a class="nav-link">Portfolio</a>
      </router-link>
      <router-link to="/stocks" activeClass="nav-item active" tag="li">
        <a class="nav-link">Stocks</a>
      </router-link>
    </ul>

    <!-- Collapse button -->
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>-->

    <!-- Navbar links -->
    <div class="collapse navbar-collapse nav-right" id="collapsibleNavbar">
      <ul class="navbar-nav ml-auto">
        <strong class="navbar-text nav-link">Funds:</strong>

        <li class="nav-item active">
          <a class="nav-link" href="#">End Day</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Save</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Load</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
</script>
