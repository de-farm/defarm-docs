```html
<template>
  <ion-breadcrumbs :max-items="maxBreadcrumbs" @ionCollapsedClick="expandBreadcrumbs()">
    <ion-breadcrumb href="#home">Home</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">Electronics</ion-breadcrumb>
    <ion-breadcrumb href="#photography">Photography</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">Cameras</ion-breadcrumb>
    <ion-breadcrumb href="#film">Film</ion-breadcrumb>
    <ion-breadcrumb href="#35mm">35 mm</ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBreadcrumb, IonBreadcrumbs },
    data() {
      return {
        maxBreadcrumbs: 4,
      };
    },
    methods: {
      expandBreadcrumbs() {
        this.maxBreadcrumbs = undefined;
      },
    },
  });
</script>
```
