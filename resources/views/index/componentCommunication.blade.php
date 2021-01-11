@extends('layouts.main')
@section('content')

    <section>
        <div class="container" id="root">
            <coupon @applied="onCouponApplied"></coupon>
            <h1 v-if="couponApplied">You used a coupon!</h1>

        </div>
    </section>

@endsection

@section('scripts')

    <script src="{{ asset('js/component-communication.js') }}"></script>

@endsection
