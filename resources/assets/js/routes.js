import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        component: require('./views/Home').default,
    },
    {
        path: '/about',
        component: require('./views/About').default,
    },
    {
        path: '/contact',
        component: require('./views/Contact').default,
    },
];

export default new VueRouter({
    routes,
    linkExactActiveClass: 'active',
});
