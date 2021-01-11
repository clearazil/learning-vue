'use strict';

Vue.component('tabs', {
    template: `
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item" v-for="tab in tabs">
                    <a
                        class="nav-link"
                        :class="{'active' : tab.isActive}"
                        :href="tab.href"
                        @click="selectTab(tab)">

                        {{ tab.name }}
                    </a>
                </li>
            </ul>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,
    mounted() {
        console.log(this.$children);
    },
    data() {
        return {tabs: []};
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach((tab) => {
                tab.isActive = (tab.name === selectedTab.name);
            });
        },
    },
});

Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,
    props: {
        name: {required: true},
        selected: {default: false},
    },
    data() {
        return {
            isActive: false,
        };
    },
    mounted() {
        this.isActive = this.selected;
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        },
    },
});

new Vue({
    el: '#root',
});
