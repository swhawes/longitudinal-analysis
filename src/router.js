import {createRouter, createWebHistory} from 'vue-router'
import Home from '/views/Home.vue'
import About from '/views/About.vue'
import TraditionalLinearModels from '/views/TraditionalLinearModels.vue'
import ResidualizedChangeScore from '/views/ResidualizedChangeScore.vue'
import User from '/views/Users/User.vue'
import UserHome from '/views/Users/UserHome.vue'
import UserProfile from '/views/Users/UserProfile.vue'
import UserPosts from '/views/Users/UserPosts.vue'
import NotFound from '/views/NotFound.vue'
import testmain from '/views/test/testmain.vue'
import testa1 from '/views/test/testa/testa1.vue'
import testb1 from '/views/test/testb/testb1.vue'
//import xxx from '/views/xxxxx.vue'
//import xxx from '/views/xxxxx.vue'
//import xxx from '/views/xxxxx.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/TraditionalLinearModels', name: 'TraditionalLinearModels', component: TraditionalLinearModels},
        {path: '/ResidualizedChangeScore', name: 'ResidualizedChangeScore', component: ResidualizedChangeScore},
        {path: '/user/:username',
        component: User,
        children: [
        // UserHome will be rendered inside User's <router-view>
        // when /users/:username is matched
        { path: '', component: UserHome },

        // UserProfile will be rendered inside User's <router-view>
        // when /users/:username/profile is matched
        { path: 'profile', component: UserProfile },

        // UserPosts will be rendered inside User's <router-view>
        // when /users/:username/posts is matched
        { path: 'posts', component: UserPosts },
        ]
        },
        {path: '/test/testmain', name: 'testmain', component: testmain},
        {path: '/test/testa/testa1', name: 'testa1', component: testa1},
        {path: '/test/testb/testb1', name: 'testb1', component: testb1},
        {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
    ]
})