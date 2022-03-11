<template>
  <base-layout page-default-back-link="/" :page-title="'Challenge Detail'">
    <ion-card>
      <h1 style="padding: 20px; color: black">
        Challenge Details Will be here...
      </h1>
    </ion-card>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/base/BaseLayout.vue";

import { IonCard } from "@ionic/vue";
export default {
  components: {
    BaseLayout,
    IonCard,
  },
  name: "ChallengeDetail",
};
</script>