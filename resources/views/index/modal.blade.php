@extends('layouts.main')
@section('content')

    <section>
        <div class="container" id="root">
            <modal>
                <template slot="header">My title</template>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae totam harum nobis vero placeat mollitia deserunt illo optio quos voluptas sequi aut voluptate possimus incidunt rerum, saepe suscipit, asperiores qui dolorum ipsam? Consequuntur error doloribus inventore labore, id voluptas placeat!</p>
                <template slot="footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </template>
            </modal>
        </div>
    </section>

@endsection

@section('scripts')

    <script src="{{ asset('js/modal.js') }}"></script>

@endsection
