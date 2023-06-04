<nav class="navbar bg-body-tertiary">
  <div class="container">
    <a href="/" class="navbar-brand">
      Kepler
      <small style="font-size: 0.7em; color: #555; vertical-align: center;"> 네트워킹 행사 일정 목록</small>
    </a>
    <ul class="navbar-nav d-flex">
      <li class="nav-item">
        <a href="https://github.com/robin-maki/kepler" class="nav-link"><i class="bi bi-github"></i> 기여하기</a>
      </li>
    </ul>
  </div>
</nav>
<div class="container">
  <slot/>
</div>
<style>
  :global(body) {
    background-color: #f5f5f5;
  }
</style>