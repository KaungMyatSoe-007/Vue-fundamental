Vue.component('create-post', {
    template:`
        <div>
        <input v-model="title" placeholder="Enter Post Title"><br><br>
        <input v-model="content" placeholder="Enter Post Content"><br><br>
        <button v-on:click="createPost">Create</button>
        </div>
    `,
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        createPost(){
            this.$emit('create-post', {
                title: this.title,
                content: this.content
            });
            this.title = '';
            this.content = '';
        }
    }
})


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
    },
    methods: {
        insertPost(post) {
            if(post.title && post.content){
                this.posts.push(post);
            }   
        }
    }
})