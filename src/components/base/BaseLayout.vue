<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button>
            <ion-icon slot="icon-only" :icon="appsOutline" />
          </ion-button>
          <ion-back-button
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
        </ion-buttons>

        <ion-title> {{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-grid>
        <ion-row>
          <ion-col size-md="6">
            <slot />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { appsOutline } from "ionicons/icons";
import {
  IonGrid,
  IonCol,
  IonRow,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  /*  IonItem,
  IonList,
  IonLabel,
  IonText, */
} from "@ionic/vue";

export default {
  props: ["pageTitle", "pageDefaultBackLink"],
  components: {
    IonPage,
    IonGrid,
    IonCol,
    IonRow,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
    /*   IonItem,
    IonList,
    IonLabel,
    IonText, */
  },
  setup() {
    return {
      appsOutline,
    };
  },
};
</script>