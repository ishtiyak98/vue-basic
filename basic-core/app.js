const app = Vue.createApp({
  data: () => {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master vue and build amazing apps!",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNUmber = Math.random();
      if (randomNUmber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");

console.log("scsc");
