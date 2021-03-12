<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Push to the stream...</h5>
            <form @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
                <div class="form-group">
                    <label for="body">Status</label>
                    <textarea
                        class="form-control"
                        :class="{
                            'is-valid': form.isValidated && !form.errors.get('body'),
                            'is-invalid': form.errors.has('body')
                        }"
                        name="body" id="" rows="3" v-model="form.body">
                    </textarea>
                    <p
                        class="invalid-feedback"
                        v-if="form.errors.has('body')"
                        v-text="form.errors.get('body')">
                    </p>
                </div>
                <button type="submit" class="btn btn-primary mt-1" :disabled="form.errors.any()">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: new Form({body: ''}),
        };
    },
    methods: {
        onSubmit() {
            this.form.submit('post', '/statuses')
                .then((status) => this.$emit('completed', status));
        },
    },
};

</script>
