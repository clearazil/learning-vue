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

Vue.component('modal-box', {
    template: `
        <div class="modal" style="display: block;" tabindex="-1" role="dialog" data-show="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('close')">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p><slot></slot></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="$emit('close')">Close</button>
                        <button type="button" class="btn btn-primary" @click="$emit('close')">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    `,
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
        showModal: false,
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
