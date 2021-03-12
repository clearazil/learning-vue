<template>
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Home Page</h5>
                    <p class="card-text">I'm an example component!</p>
                </div>
            </div>
            <div class="clearfix mt-6"></div>
            <div class="card text-white bg-secondary mb-3" v-for="status in statuses" :key="status.id">
                <div class="card-header">{{ status.user.name }} said...
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ status.created_at | ago | capitalize }}</h5>
                    <p class="card-text" v-text="status.body"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import moment from 'moment';
import Status from '../models/Status';

export default {
    data() {
        return {
            statuses: [],
        };
    },
    created() {
        Status.all((statuses) => this.statuses = statuses);
    },
    filters: {
        ago(date) {
            return moment(date).fromNow();
        },
        capitalize(value) {
            return value.toUpperCase();
        },
    },
};


</script>
