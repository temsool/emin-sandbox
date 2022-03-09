<template>
  <base-layout>
    <ion-card> </ion-card>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/base/BaseLayout.vue";

import { IonCard, IonLabel } from "@ionic/vue";
export default {
  components: {
    BaseLayout,
    IonCard,
    IonLabel,
  },
  name: "ChallengesPage",
};
</script>