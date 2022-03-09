<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons >
        <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{pageTitle}}</ion-title>
      
      </ion-toolbar>
    </ion-header>
    <ion-content>
  <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
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
};
</script>