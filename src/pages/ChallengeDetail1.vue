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
            @click="openPicker"
            :value="pickedYear"
            placeholder="Select your Birthday"
          ></ion-input>
        </ion-item>

        <br />
        <ion-card-title>
          How much do you want to have each month when you
          retire?</ion-card-title
        >
        <ion-item>
          <ion-label position="floating">Monthly Amount</ion-label>

          <ion-input
            :value="monthlyAmount"
            v-model="monthlyAmount"
            autofocus="on"
            clearInput="true"
            inputmode="number"
            required="true"
            clearOnEdit="true"
            placeholder="e.g. 1000 £"
          ></ion-input>

          <ion-icon slot="end" :icon="calculatorOutline" />
        </ion-item>
        <br />
        <ion-card-title>What age would you like to FIRE?</ion-card-title>
        <ion-item>
          <ion-input
            min="40"
            max="90"
            type="number"
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
  pickerController,
  IonInput,
  IonItem,
} from "@ionic/vue";
import { format, parseISO } from "date-fns";

import { calculatorOutline } from "ionicons/icons";
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
      picked: {
        birthYear: null,
      },
      pickingOptions: {
        name: "birthYear",
        options: [
          { text: 1970, value: 1970 },
          { text: 1971, value: 1971 },
          { text: 1972, value: 1972 },
          { text: 1973, value: 1973 },
          { text: 1974, value: 1974 },
          { text: 1975, value: 1975 },
          { text: 1976, value: 1976 },
          { text: 1977, value: 1977 },
          { text: 1978, value: 1978 },
          { text: 1979, value: 1979 },
          { text: 1980, value: 1980 },
          { text: 1981, value: 1981 },
          { text: 1982, value: 1982 },
          { text: 1983, value: 1983 },
          { text: 1984, value: 1984 },
          { text: 1985, value: 1985 },
          { text: 1986, value: 1986 },
          { text: 1987, value: 1987 },
          { text: 1988, value: 1988 },
          { text: 1989, value: 1989 },
          { text: 1990, value: 1990 },
          { text: 1991, value: 1991 },
          { text: 1992, value: 1992 },
          { text: 1993, value: 1993 },
          { text: 1994, value: 1994 },
          { text: 1995, value: 1995 },
          { text: 1996, value: 1996 },
          { text: 1997, value: 1997 },
          { text: 1998, value: 1998 },
          { text: 1999, value: 1999 },
          { text: 2000, value: 2000 },
          { text: 2001, value: 2001 },
          { text: 2002, value: 2002 },
          { text: 2003, value: 2003 },
          { text: 2004, value: 2004 },
          { text: 2005, value: 2005 },
          { text: 2006, value: 2006 },
          { text: 2007, value: 2007 },
          { text: 2008, value: 2008 },
          { text: 2009, value: 2009 },
        ],
      },
    };
  },
  computed: {
    pickedYear() {
      return this.picked.birthYear.text;
    },
  },
  methods: {
    async openPicker() {
      const picker = await pickerController.create({
        columns: [this.pickingOptions],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Confirm",
            handler: (selected) => {
              this.picked = selected;
            },
          },
        ],
      });
      await picker.present();
    },
    validator() {
      //if age is
      //if all fields set
    },
    calcBarWidth() {
      let birthYear = this.picked.birthYear.text;

      var currentTime = new Date();

      var year = currentTime.getFullYear();

      let currentAge = birthYear - year;
      currentAge = Math.abs(currentAge);

      this.totalYears = Math.abs(this.fireAge - currentAge);

      this.totalAmountRequired = this.monthlyAmount * 12 * 25;

      this.showResult = true;
      this.barWidth = ((this.howMuch / this.totalAmountRequired) * 100).toFixed(
        2
      );
      this.barWidth /= 100; //because abr width is from 0 to 1
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

    IonInput,
    IonItem,
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
      calculatorOutline,
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