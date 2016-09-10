import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import LogTime from './components/LogTime'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()

router.map({
	'/Home': {
		component: Home
	},
	'/time-entries': {
		component: TimeEntries,
		subRoutes: {
			'log-time': {
				component: LogTime
			}
		}
	}
})

router.redirect({
	'*': '/Home'
})

router.start(App, '#app')