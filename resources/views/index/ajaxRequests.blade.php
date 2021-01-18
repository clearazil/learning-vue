@extends('layouts.main')
@section('content')

    <section>
        <div class="container" id="root">
            <ul>
                <li v-for="skill in skills">@{{ skill }}</li>
            </ul>

        </div>
    </section>

@endsection

@section('scripts')

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="{{ asset('js/ajax-requests.js') }}"></script>

@endsection
