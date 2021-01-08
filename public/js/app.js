'use strict';

Vue.component('message-card', {
    props: ['title', 'body'],
    template: `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ body }}</p>
        </div>
  </div>
    `,
});

Vue.component('task-list', {
    template: `
        <div>
            <task-item v-for="task in tasks">{{ task.description }}</task-item>
        </div>
    `,
    data() {
        return {
            tasks: [
                {description: 'Go to this', completed: true},
                {description: 'Go to this 2', completed: true},
                {description: 'Go to this 3', completed: false},
                {description: 'Go to this 4', completed: true},
                {description: 'Go to this 5', completed: true},
                {description: 'Go to this 6', completed: false},
                {description: 'Go to this 7', completed: true},
                {description: 'Go to this 8', completed: false},
            ],
        };
    },
});

Vue.component('task-item', {
    template: '<li><slot></slot></li>',
});

new Vue({
    el: '#root',
    data: {
        message: 'Hello world!!',
        names: ['Purk', 'Tommie', 'Ieniemienie', 'Pino'],
        newName: '',
        title: 'title of button',
        isLoading: false,
        tasks: [
            {description: 'Go to this', completed: true},
            {description: 'Go to this 2', completed: true},
            {description: 'Go to this 3', completed: false},
            {description: 'Go to this 4', completed: true},
            {description: 'Go to this 5', completed: true},
            {description: 'Go to this 6', completed: false},
            {description: 'Go to this 7', completed: true},
            {description: 'Go to this 8', completed: false},
        ],
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        },
        incompleteTasks() {
            return this.tasks.filter((task) => !task.completed);
        },
    },
    methods: {
        addName() {
            this.names.push(this.newName);
            this.newName = '';
        },
        toggleClass() {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
            }, 2000);
        },
    },
});
