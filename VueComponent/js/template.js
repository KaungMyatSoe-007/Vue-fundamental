Vue.component('vote', {
    template:`#vote-template`,
    
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