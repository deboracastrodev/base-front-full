<template>
  <div class="v-footer">
    <div class="v-footer__copyright">
      Vert Capital {{ new Date().getFullYear() }} © Todos os direitos reservados
    </div>
    <div class="v-footer__links">
      <a href="#">Sobre a Vert</a> |
      <a href="#">Fale conosco</a>
    </div>
  </div>
</template>

<style lang="scss">
.v-footer {
  background-color: $neutral-color-hight-light;
  font-size: 14px;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  z-index: 1;
  justify-content: space-between;

  * {
    color: $neutral-color-low-light;
  }

  a {
    color: $neutral-color-low-light;
    text-decoration: none;

    &:hover {
      color: #00747a;
    }
  }

  &__links {
    margin-right: 3rem;
  }

  &__copyright {
    margin-left: 3rem;
  }
}
</style>
