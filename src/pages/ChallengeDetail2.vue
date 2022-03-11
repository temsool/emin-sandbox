<template>
  <ion-item>
    <ion-input
      id="open-date-input-1"
      :value="birthday"
      placeholder="Select your Birthday"
    ></ion-input>
  </ion-item>

  <ion-popover trigger="open-date-input-1" :show-backdrop="true">
    <ion-datetime
      ref="customDatetime"
      presentation="date"
      @ionChange="(ev) => (birthday = formatDate(ev.detail.value))"
    >
      <ion-text slot="end">{{ birthday }}</ion-text>
      <ion-buttons slot="buttons">
        <ion-button
          fill="solid"
          color="primary"
          expand="block"
          @click="confirm()"
        >
          Select
        </ion-button>
      </ion-buttons>
    </ion-datetime>
  </ion-popover>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  IonButton,
  IonButtons,
  IonDatetime,
  IonInput,
  IonItem,
  IonPopover,
} from "@ionic/vue";
import { format, parseISO } from "date-fns";

export default defineComponent({
  name: "ChallengeDetail2",
  components: {
    IonButton,
    IonButtons,

    IonDatetime,
    IonInput,
    IonItem,

    IonPopover,
  },
  setup() {
    const customDatetime = ref();
    const date1 = "";
    const date2 = "";

    const confirm = () => {
      console.log(customDatetime);
      if (customDatetime.value === undefined) return;

      customDatetime.value.$el.confirm();
    };

    const reset = () => {
      if (customDatetime.value === undefined) return;

      customDatetime.value.$el.reset();
    };

    const formatDate = (value) => {
      return format(parseISO(value), "MMM dd yyyy");
    };

    return {
      customDatetime,
      confirm,
      date1,
      date2,
      formatDate,
      reset,
    };
  },
});
</script>