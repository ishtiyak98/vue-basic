const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    submissionForm: (event) => {
      console.log();
      alert("Form Submitted" +" "+ event.target.name.value);
    },
  },
});

app.mount("#events");
