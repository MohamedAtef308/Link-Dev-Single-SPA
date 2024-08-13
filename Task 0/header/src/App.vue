<template>
  <HeaderComp />
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
  },
};
</script>

<style>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 14px;
  text-transform: capitalize;
  border-radius: 999px;
  padding: 20px 30px;
  height: 60px;
  border: none;
  color: #fff;
  background-color: #00b8ff;
}

.button i {
  font-size: 16px;
  opacity: 1;
}
</style>
