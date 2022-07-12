<template>
  <div>
    <div class="container-fluid">
      <div class="row nowrap">
        <main class="" style="flex: 1; overflow: hidden">
          <div
            class="v-main-content px-4 px-xl-5 pb-5 pt-5 position-relative"
            style="flex: 1 1 0%; overflow: hidden"
          >
            <slot>
              <h3>Page not found</h3>
            </slot>
          </div>
        </main>
      </div>
    </div>
    <Footer />
  </div>
</template>
