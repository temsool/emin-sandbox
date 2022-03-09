<template>
   <base-layout page-title="Home">


  <ion-card>
 
    <ion-item  router-link='/challenge/1'>
     
      <ion-label>Challenge 1</ion-label>


    </ion-item>


<ion-item  router-link='/challenge/2'>
     
      <ion-label>Challenge 2</ion-label>


    </ion-item>
  </ion-card>
   </base-layout>
</template>



<script>

import { IonCard,  IonItem, IonLabel } from '@ionic/vue';

export default {
    name : "HomePage",
 components: { IonCard,  IonItem, IonLabel }
}
</script>