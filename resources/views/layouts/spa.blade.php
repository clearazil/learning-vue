<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="{{ asset('assets/css/app.css') }}" rel="stylesheet">
</head>
<body class="d-flex flex-column h-100">
    <div id="app">
        @include('layouts.header')

        <main class="flex-shrink-0">
            <div class="container mt-6">
                <router-view></router-view>
            </div>
        </main>
    </div>
    @yield('content')
    <script src="{{ asset('assets/js/spa.js') }}"></script>
</body>
</html>
