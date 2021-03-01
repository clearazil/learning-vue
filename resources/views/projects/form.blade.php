
<div class="form-group {{ $errors->has('name') ? 'has-error' : '' }}">
    <label for="name" class="col-md-2 control-label">Name</label>
    <div class="col-md-10">
        <input
            class="form-control" :class="{ 'is-valid': form.isValidated && !form.errors.get('name'), 'is-invalid': form.errors.get('name') }" name="name" type="text"
            id="name" value="{{ old('name', optional($project)->name) }}"
            minlength="1" maxlength="255" v-model="form.name">
            <p class="invalid-feedback"  v-if="form.errors.has('name')" v-text="form.errors.get('name')">@error('name') {{message}} @enderror</p>
    </div>
</div>

<div class="form-group {{ $errors->has('description') ? 'has-error' : '' }}">
    <label for="description" class="col-md-2 control-label">Description</label>
    <div class="col-md-10">
        <input
            class="form-control" :class="{ 'is-valid': form.isValidated && !form.errors.get('description'), 'is-invalid': form.errors.has('description') }" name="description" type="text"
            id="description" value="{{ old('description', optional($project)->description) }}"
            minlength="1" maxlength="255" v-model="form.description"
        >
        <p class="invalid-feedback" v-if="form.errors.has('description')" v-text="form.errors.get('description')">@error('description') {{message}} @enderror</p>
    </div>
</div>

