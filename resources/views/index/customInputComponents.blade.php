@extends('layouts.main')
@section('content')

    <section>
        <div class="container" id="root">
            <coupon v-model="coupon">

        </div>
    </section>

@endsection

@section('scripts')

    <script src="{{ asset('assets/js/custom-input-components.js') }}"></script>

@endsection
