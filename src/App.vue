<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink class="hover-underline-animation home" to="/"><h3>Performance Calculator</h3></RouterLink>
      <nav>
        <RouterLink class="hover-underline-animation" to="/">Home</RouterLink>
        <RouterLink class="hover-underline-animation" to="/calculator">Calculator</RouterLink>
        <a target=_blank class="hover-underline-animation" href="https://github.com/d4vss/performance-calculator/">GitHub</a>
      </nav>
    </div>  
  </header>

  <RouterView v-slot="{ Component }">
    <Transition name="page-fade" mode="out-in">
      <Component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style scoped>  
.wrapper {
  padding-inline: 15px;
  display: flex;
  justify-content: space-between;
  margin-block: 2rem;
  padding-bottom: 1rem;
  border-bottom: solid 2px var(--color-text);
}

@media (max-width: 600px) {
  .home {
    display: none;
  }
}

nav a.router-link-exact-active {
  color: var(--color-accent);
}

nav a.router-link-exact-active:hover {
  color: var(--color-accent);
}

a {
  display: inline-block;
  margin-left: 1.5rem;
  transition: color .15s ease-out;
}

a:first-of-type {
  margin-left: 0;
}
</style>
