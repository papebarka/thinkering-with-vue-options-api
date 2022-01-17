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
        <h2>Even numbers up to 10</h2>
        <div v-for="number in evenList">
            <span>{{ number }}</span>
        </div>
    `,
    data(){
        return {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        }
    },
    computed: {
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
        isEven(number) {
            return number % 2 === 0;
        }
    }
}

const People = {
    template: `
        <button v-for="person in people"
        v-on:click="click(person)">
            <span>{{ person }}</span>
        </button>
    `,
    data(){
        return {
            people: ['Adam', 'Zo', 'Joe', 'Ilyass', 'Kady', 'Robert', 'Kan'],
        }
    },

    methods: {
        click(person) {
            this.$emit('handlePerson', person);
        },
    }
}

const app = Vue.createApp({
    components: {
        Greeting,
        Number,
        People,
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
            <p class="blue">Valeur: {{ value }}</p>
        </div>
        <h1>{{msg}}</h1>
        <p>{{ count }}</p>
        <button v-on:click="increment">Increment</button>
        <div v-if="isEven(count)">Even</div>
        <div v-else>Odd</div>
        <div v-for="name in names">
            <span>{{ name }}</span>
        </div>
        <hr>
        <h2>From Number component</h2>
        <number />
        <hr />
        <h2>Person</h2>
        <people v-on:handlePerson="handlePerson" />
        <br />
        <h4>Person Event</h4>
        <p v-for="person in people">
            You have just clicked on <em>{{ person }}</em>
        </p>
    `,

    data(){
        return {
            msg: "Hello World",
            count: 0,
            names: ['Adam', 'Issa', 'Babacar', 'Cheriff'],
            value: '',
            people: [],
        }
    },

    computed: {
        error(){
            if(this.value.length < 5) {
                return "The input character cannot be less than 5!"
            }
        },
    },

    methods: {
        /*input($event) {
            this.value = $event.target.value;
        },*/

        increment() {
            this.count += 1;
        },

        isEven(number) {
            return number % 2 === 0;
        },

        handlePerson(person) {
            this.people.push(person);
        }
    }
});

app.mount('#app');