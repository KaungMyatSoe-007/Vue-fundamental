Vue.component('post', {
    template:`
            <div>
                <h1>{{ name }}</h1>
                <p>{{ content }}</p>
            </div>
    `,
    props: {
        name: {
            type: String,
            default: "Default Post"
        },
        content: {
            type: String,
            required: true
        }
    }
})

new Vue({
    el: '#app',
    data: {
       posts:[
           {title:'Post One', content:'Post Content One'},
           {title:'Post Two', content:'Post Content Two'},
           {title:'Post Three', content:'Post Content Three'},
       ]
    }
})