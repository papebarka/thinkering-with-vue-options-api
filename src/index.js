import * as Vue from 'vue/dist/vue.esm-bundler.js';

const Greeting = {
    props: ['name'],
    template: `
        <div>
            <span>Hello {{ name }}</span>
        </div>
    `,
}

const Number = {
    template: `
        <div v-for="number in numbers"
        v-bind:class="getClass(number)">
            <span>{{ number }}</span>
        </div>
    `,
}

const app = Vue.createApp({
    components: {
        Greeting,
    },

    template: `
        <div>
            <h2>Greetings</h2>
            <greeting name="Isaac" />
            <greeting name="Issq" />
        </div>
        <hr />
        <div>
            <h2>Form with validation</h2>
            <input v-model="value" />
            <p class="red">{{ error }}</p>
            <p class="blue">Vwleur: {{ value }}</p>
        </div>
        <h1>{{msg}}</h1>
        <p>{{ count }}</p>
        <button v-on:click="increment">Increment</button>
        <div v-if="isEven(count)">Even</div>
        <div v-else>Odd</div>
        <h2>Even numbers up to 10</h2>
        <div v-for="number in evenList">
            <span>{{ number }}</span>
        </div>
        <div v-for="name in names">
            <span>{{ name }}</span>
        </div>
        <hr>
        <h2>All numbers with dynamic class</h2>
        
    `,

    data(){
        return {
            msg: "Hello World",
            count: 0,
            names: ['Adam', 'Issa', 'Babacar', 'Cheriff'],
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            value: '',
        }
    },

    computed: {
        error(){
            if(this.value.length < 5) {
                return "The input character cannot be less than 5!"
            }
        },

        evenList() {
            return this.numbers.filter(num => this.isEven(num))
        }
    },

    methods: {
        /*input($event) {
            this.value = $event.target.value;
        },*/

        getClass(number) {
            return this.isEven(number) ? 'blue' : 'red';
        },

        increment() {
            this.count += 1;
        },

        isEven(number) {
            return number % 2 === 0;
        }
    }
});

app.mount('#app');