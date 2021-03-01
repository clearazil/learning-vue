
<div class="form-group {{ $errors->has('name') ? 'has-error' : '' }}">
    <label for="name" class="col-md-2 control-label">Name</label>
    <div class="col-md-10">
        <input
            class="form-control" :class="{ 'is-valid': form.isSubmitted && !errors.get('name'), 'is-invalid': errors.get('name') }" name="name" type="text"
            id="name" value="{{ old('name', optional($project)->name) }}"
            minlength="1" maxlength="255" v-model="name">
            <p class="invalid-feedback"  v-if="errors.has('name')" v-text="errors.get('name')">@error('name') {{message}} @enderror</p>
    </div>
</div>

<div class="form-group {{ $errors->has('description') ? 'has-error' : '' }}">
    <label for="description" class="col-md-2 control-label">Description</label>
    <div class="col-md-10">
        <input
            class="form-control" :class="{ 'is-valid': form.isSubmitted && !errors.get('description'), 'is-invalid': errors.has('description') }" name="description" type="text"
            id="description" value="{{ old('description', optional($project)->description) }}"
            minlength="1" maxlength="255" v-model="description"
        >
        <p class="invalid-feedback" v-if="errors.has('description')" v-text="errors.get('description')">@error('description') {{message}} @enderror</p>
    </div>
</div>

