import About from '@/views/About.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify'
import { routes } from '@/router/index';
import VueRouter from 'vue-router'

describe('Testing Header.vue', () => {
    let aboutWrap;
    const localVue = createLocalVue();
    const router = new VueRouter({ routes });

    beforeEach(() => {
        localVue.use(Vuetify);
        aboutWrap = shallowMount(About, { localVue, router })
        aboutWrap.vm.show = {
            "id": 47731,
            "url": "http://www.tvmaze.com/shows/47731/true-north",
            "name": "True North",
            "type": "Documentary",
            "language": "English",
            "genres": [],
            "status": "Running",
            "runtime": 30,
            "premiered": "2013-09-30",
            "officialSite": "https://www.bbc.co.uk/programmes/b03vpvqb",
            "schedule": {
                "time": "22:45",
                "days": [
                    "Monday"
                ]
            },
            "rating": {
                "average": null
            },
            "weight": 88,
            "network": {
                "id": 389,
                "name": "BBC One Northern Ireland",
                "country": {
                    "name": "United Kingdom",
                    "code": "GB",
                    "timezone": "Europe/London"
                }
            },
            "webChannel": null,
            "externals": {
                "tvrage": null,
                "thetvdb": null,
                "imdb": null
            },
            "image": null,
            "summary": "<p>Series of documentaries looking at life in modern-day Northern Ireland.</p>",
            "updated": 1588386628,
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/shows/47731"
                },
                "previousepisode": {
                    "href": "http://api.tvmaze.com/episodes/1855683"
                }
            },
            "_embedded": {
                "cast": []
            }
        }
    })

    afterEach(() => {
        aboutWrap.destroy();
    })

    it('Testing if it is a Vue instance', () => {
        expect(aboutWrap.isVueInstance).toBeTruthy();
    })

    it('it should have a <v-container-stub>', () => {
        expect(aboutWrap.html()).toContain("v-container-stub")
    });

    it('should find v-layout', () => {
        expect(aboutWrap.html()).toContain("v-layout-stub")
    });

    it('it should have a <v-container-stub>', () => {
        expect(aboutWrap.html()).toContain("v-container-stub")
    });

    it('should find v-icon', () => {
        expect(aboutWrap.html()).toContain("v-icon-stub")
    });

    it('it should have a strong element', () => {
        expect(aboutWrap.find('strong').text()).toBe("Official site:")
    });
})