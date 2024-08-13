<template>
  <header tabindex="0">
    <nav>
      <div class="logo">
        <span class="icon">
          <span class="icon-OBJECTS">
            <span class="path1"></span>
            <span class="path2"></span>
            <span class="path3"></span>
            <span class="path4"></span>
            <span class="path5"></span>
            <span class="path6"></span>
            <span class="path7"></span>
            <span class="path8"></span>
          </span>
        </span>
        <span>TravelX</span>
      </div>

      <div class="nav__links-container">
        <button>home <i class="fa-solid fa-angle-down"></i></button>
        <button>about us <i class="fa-solid fa-angle-down"></i></button>
        <button>services <i class="fa-solid fa-angle-down"></i></button>
        <button>projects <i class="fa-solid fa-angle-down"></i></button>
        <button>blog <i class="fa-solid fa-angle-down"></i></button>
        <button>page <i class="fa-solid fa-angle-down"></i></button>
        <button>contact <i class="fa-solid fa-angle-down"></i></button>
      </div>

      <button class="button">
        get an appointment
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </nav>
  </header>
</template>

<script>

export default {
  name: "HeaderComp",
};
</script>

<style scoped>
header {
  position: absolute;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 130px;
  margin-top: 20px;
  width: 100%;
  background-color: #fff;
  padding: 10px;
  border-radius: 999px;
}

.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 32px;
  gap: 10px;
  color: #2437ac;
}

.nav__links-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.nav__links-container button {
  background: transparent;
  border: none;
  text-transform: uppercase;
  color: #2437ac;
  font-size: 16px;
  font-weight: bold;
}

i {
  margin-left: 5px;
}
</style>
