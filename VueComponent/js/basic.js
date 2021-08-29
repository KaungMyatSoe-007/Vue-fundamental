Vue.component('vote', {
    template:`
        <div>
            <h1>Result {{ count }}</h1>
            <button @click="incrementCount" > vote </button>
        </div>
    `,
    
    data(){
        return {
            count: 0
        }
    },

    methods: {
        incrementCount(){
            this.count++;
        }
    }
})



new Vue({
    el: '#app',
})