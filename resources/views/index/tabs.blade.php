@extends('layouts.main')
@section('content')

    <section>
        <div class="container" id="root">
            <tabs>
                <tab name="About Us" :selected="true">
                    <h1>Here is the content for the about us tab.</h1>
                </tab>
                <tab name="About Me">
                    <h1>Here is the content for the about me tab.</h1>
                </tab>
                <tab name="About Something">
                    <h1>Here is the content for the about something tab.</h1>
                </tab>
            </tabs>

        </div>
    </section>

@endsection

@section('scripts')

    <script src="{{ asset('js/tabs.js') }}"></script>

@endsection
