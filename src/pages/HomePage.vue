<template>
  <base-layout page-title="My Sandbox Homepage">
    <ion-card>
      <ion-card-header>
        <ion-img
          src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg"
        ></ion-img>
        <ion-card-title>Challenges</ion-card-title>
        <ion-card-subtitle>by: Chris</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <p>I'm Practicing here...</p>
        <hr />

        <ion-button
          size="medium"
          color="dark"
          expand="block"
          router-link="/challenge/1"
        >
          <ion-icon slot="start" :icon="golfOutline" />

          <ion-label>Challenge 1 & 2</ion-label>
        </ion-button>
        <ion-button
          disabled
          size="medium"
          color="dark"
          expand="block"
          router-link="/challenge/2"
        >
          <ion-icon slot="start" :icon="golfOutline" />
          <ion-label>Challenge 3</ion-label>
        </ion-button>
        <ion-buttons> </ion-buttons>
      </ion-card-content>
    </ion-card>
  </base-layout>
</template>
<style scoped>
ion-card-title {
  color: black;
}
ion-img {
  border-radius: 10px;
  overflow: hidden;
}
</style>

<script>
import { golfOutline } from "ionicons/icons";
import {
  IonImg,
  IonCard,
  IonIcon,
  IonButtons,
  IonButton,
  IonLabel,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";

export default {
  name: "HomePage",
  components: {
    IonImg,
    IonCard,
    IonIcon,
    IonButtons,
    IonButton,
    IonLabel,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
  },
  setup() {
    return {
      golfOutline,
    };
  },
};
</script>