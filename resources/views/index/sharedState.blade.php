@extends('layouts.main')
@section('content')

    <section>
        <div class="container" id="root">
            <h1>Shared State</h1>

            <div id="one">
                @{{ shared.user.name }}
            </div>
            <div id="two">
                @{{ shared.user.name }}
            </div>
        </div>
    </section>

@endsection

@section('scripts')

    <script src="{{ asset('js/shared-state.js') }}"></script>

@endsection
