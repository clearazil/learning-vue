@extends('layouts.main')
@section('content')

    <!-- Banner -->
    <section id="banner">
        <div class="content" id="root">
            <p>The value of the input is @{{ message }}</p>
            <p>This is the message reversed @{{ reversedMessage }}</p>
            <input type="text" id="input" v-model="message">
            <br />
            <p>Names</p>
            <ul>
                <li v-for="name in names" v-text="name"></li>
            </ul>
            <input id="name-input" type="text" v-model="newName">
            <button :title="title" @click="addName">Add name</button>
            <br />

            <button :disabled="isLoading" :class="{ 'is-loading': isLoading, 'is-done': !isLoading }" @click="toggleClass">Click me</button>

            <h1>All Tasks</h1>
            <ul>
                <li v-for="task in tasks" v-text="task.description"></li>
            </ul>
            <h2>Incomplete Tasks</h2>
            <ul>
                <li v-for="task in incompleteTasks" v-text="task.description"></li>
            </ul>
        </div>
        <span class="image object">
            <img src="{{ asset('images/pic10.jpg') }}" alt="" />
        </span>
    </section>

@endsection
