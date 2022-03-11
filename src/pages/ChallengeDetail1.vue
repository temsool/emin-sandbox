<template>
  <base-layout page-default-back-link="/" :page-title="'Challenge Detail'">
    <ion-card style="--background: #d4e157">
      <ion-card-header>
        <ion-card-title>Brief </ion-card-title>
      </ion-card-header>
      <ion-card-content style="color: black">
        <p>
          To create a progress bar that tells you when you can retire "fire" as
          it's called in finance terms.
        </p>
      </ion-card-content>
    </ion-card>

    <ion-card class="no-padding">
      <ion-card-content>
        <ion-accordion-group>
          <ion-accordion value="numbers">
            <ion-item style="--background: #dce775" slot="header">
              <ion-card-title>Specification </ion-card-title>
            </ion-item>

            <ion-card-content slot="content">
              <div><strong>Input form:</strong></div>
              <div><strong>&nbsp;</strong></div>
              <div>How old are you? Input: Date of Birth</div>
              <div>&nbsp;</div>
              <div>
                How much&nbsp;do you want to have each month when you retire?
                Input:&nbsp;<strong>Monthly&nbsp;Amount</strong>
              </div>
              <div>&nbsp;</div>
              <div>What age would you like to FIRE? Input: Date</div>
              <div>&nbsp;</div>
              <div>How much do you have now? Input: Amount</div>
              <div>&nbsp;</div>
              <div><strong>Submit</strong></div>
              <div>&nbsp;</div>
            </ion-card-content>
          </ion-accordion>
        </ion-accordion-group>
      </ion-card-content>
    </ion-card>

    <ion-card class="no-padding">
      <ion-card-content>
        <ion-accordion-group>
          <ion-accordion value="numbers">
            <ion-item style="--background: #c5e1a5" slot="header">
              <ion-card-title>Challenge 1</ion-card-title>
            </ion-item>

            <ion-card-content slot="content">
              <div><strong>&nbsp;</strong></div>
              <div><strong>Total amount needed Progress Bar:</strong></div>
              <div>&nbsp;</div>
              <div>
                Monthly Amount x 12 = Yearly Amount, then x 25 = Total Amount
              </div>
              <div>&nbsp;</div>
              <div>Percent Complete (Loading Bar)&nbsp;</div>
              <div>&nbsp;</div>
              <div>
                Current Amount ====== Total Amount&nbsp; &nbsp; i.e 12% Complete
              </div>
              <div>&nbsp;</div>
              <div>For example</div>
              <div>&nbsp;</div>
              <div>
                I have &pound;120,000 but I need &pound;1,000,000 = 12% Complete
              </div>
            </ion-card-content>
          </ion-accordion>
        </ion-accordion-group>
      </ion-card-content>
    </ion-card>

    <ion-card class="card-result" style="--background: #f1f1f1">
      <ion-card-header>
        <ion-card-title>Result </ion-card-title>
      </ion-card-header>
      <hr />
      <ion-card-content style="color: black">
        <ion-card-title> How old are you?</ion-card-title>

        <ion-item>
          <ion-input
            required
            @click="setOpen(true, $event)"
            :value="birthday"
            placeholder="Select your Birthday"
          ></ion-input>
        </ion-item>

        <ion-popover
          :event="event"
          @didDismiss="setOpen(false)"
          :is-open="isOpenRef"
          :show-backdrop="false"
        >
          <ion-datetime
            @ionChange="(ev) => (birthday = formatDate(ev.detail.value))"
            ref="customDatetime"
            min="1930-01-01"
            max="2012-01-01"
            value="1986-01-01"
            presentation="date"
          >
            <ion-buttons slot="buttons">
              <ion-button
                fill="solid"
                color="success"
                expand="block"
                @click="confirm(event)"
              >
                Select
              </ion-button>
            </ion-buttons>
          </ion-datetime>
        </ion-popover>
        <br />

        <ion-card-title
          >How much do you want to have each month when you
          retire?</ion-card-title
        >
        <ion-item>
          <ion-input
            :value="monthlyAmount"
            v-model="monthlyAmount"
            placeholder="Monthly Amount"
          ></ion-input>
        </ion-item>
        <br />
        <ion-card-title>What age would you like to FIRE?</ion-card-title>
        <ion-item>
          <ion-input
            min="40"
            max="90"
            type="number"
            required
            :value="fireAge"
            v-model="fireAge"
            placeholder="Fire Date"
          >
          </ion-input>
        </ion-item>

        <br />
        <ion-card-title>How much do you have now?</ion-card-title>
        <ion-item>
          <ion-input
            type="number"
            required
            :value="howMuch"
            v-model="howMuch"
            placeholder="Amount"
          >
          </ion-input>
        </ion-item>
        <br />
        <ion-button expand="large" @click="calcBarWidth()"
          >Calculate</ion-button
        >
      </ion-card-content>
    </ion-card>

    <ion-card class="result-card" v-if="showResult">
      <ion-card-content>
        <ion-card-title>
          I have £{{ howMuch }} but I need £{{ totalAmountRequired }} ={{
            barWidth * 100
          }}% Complete</ion-card-title
        >
        <ion-progress-bar color="primary" :value="barWidth"></ion-progress-bar>
      </ion-card-content>
    </ion-card>
  </base-layout>
</template>

<script>
import { ref } from "vue";
import BaseLayout from "../components/base/BaseLayout.vue";

import {
  IonCardTitle,
  IonProgressBar,
  IonCardHeader,
  IonCardContent,
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonButton,
  IonButtons,
  IonDatetime,
  IonInput,
  IonItem,
  IonPopover,
} from "@ionic/vue";
import { format, parseISO } from "date-fns";
export default {
  data() {
    return {
      showResult: false,
      howMuch: null,
      monthlyAmount: null,
      fireAge: null,
      birthday: null,
      totalYears: null,
      totalAmountRequired: null,
      barWidth: 0,
    };
  },
  watch: {},
  methods: {
    calcTotalYears() {},
    calcBarWidth() {
      let birthYear = this.birthday.split(" ")[2];
      var currentTime = new Date();

      var year = currentTime.getFullYear();

      let currentAge = birthYear - year;
      this.totalYears = Math.abs(this.fireAge - currentAge);
      currentAge = Math.abs(currentAge);

      this.totalAmountRequired = this.monthlyAmount * 12 * this.totalYears;
      this.showResult = true;
      this.barWidth = ((this.howMuch / this.totalAmountRequired) * 100).toFixed(
        2
      );
    },
  },
  components: {
    BaseLayout,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonAccordion,
    IonAccordionGroup,
    IonProgressBar,
    IonButton,
    IonButtons,

    IonDatetime,
    IonInput,
    IonItem,

    IonPopover,
  },
  name: "ChallengeDetail1",
  setup() {
    const customDatetime = ref();

    const isOpenRef = ref(false);
    const event = ref();

    const setOpen = (state, ev) => {
      event.value = ev;
      isOpenRef.value = state;
    };

    const confirm = () => {
      if (customDatetime.value === undefined) return;

      customDatetime.value.$el.confirm();
    };

    const formatDate = (value) => {
      setOpen(false);
      return format(parseISO(value), "MMM dd yyyy");
    };

    return {
      customDatetime,

      confirm,
      setOpen,
      isOpenRef,
      formatDate,
    };
  },
};
</script>

<style scoped>
.result-card ion-card-title {
  font-size: 30px;
}
ion-progress-bar {
  margin: 30px 0 20px;
  height: 20px;
  border-radius: 30px;
}
.card-result ion-card-content ion-card-title {
  margin-bottom: 10px;
}
hr {
  background: #ccc;
}
ion-card-content {
  color: black;
}
ion-card.no-padding > ion-card-content {
  padding: 0;
}
ion-card-title {
  color: black;
}
</style>