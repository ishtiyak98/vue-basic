const app = Vue.createApp({
    data: ()=> {
        return {
            boxSelected : false,
        }
    },
    methods:{
        selectBox(){
            this.boxSelected = !this.boxSelected;
        }
    }
})

app.mount("#app");


console.log("sdc");