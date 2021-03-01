@extends('layouts.main')

@section('content')

    <section>
        <div class="container" id="app">
            <div class="panel panel-default">

                <div class="panel-heading clearfix">

                    <span class="pull-left">
                        <h4 class="mt-5 mb-5">Create New Project</h4>
                    </span>

                    <div class="btn-group btn-group-sm pull-right" role="group">
                        <a href="{{ route('projects.project.index') }}" class="btn btn-primary" title="Show All Project">
                            <span class="bi-list" aria-hidden="true"></span>
                        </a>
                    </div>

                </div>

                <div class="panel-body">

                    @if ($errors->any())
                        <ul class="alert alert-danger">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    @endif

                    <form method="POST" action="{{ route('projects.project.store') }}" accept-charset="UTF-8"
                        id="create_project_form" name="create_project_form" class="form-horizontal"
                        @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)"

                    >
                    {{ csrf_field() }}
                    @include ('projects.form', [
                                                'project' => null,
                                            ])

                        <div class="form-group">
                            <div class="col-md-offset-2 col-md-10">
                                <input class="btn btn-primary" :disabled="form.errors.any()" type="submit" value="Add">
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    </section>

@endsection

@section('scripts')

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="{{ asset('js/projects.js') }}" type="module"></script>

@endsection


