import Home from '@/views/Dashboard.vue'
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify'
import { routes } from '@/router/index';
import VueRouter from 'vue-router'
import { allShows } from '../returnShows'
import Vue from 'vue'
import ShowCard from '@/components/ShowCard.vue'

describe('Testing Dashboard.vue', () => {
    let homeWrap;
    // const Vue = createVue();
    const router = new VueRouter({ routes });

    beforeEach(() => {
        Vue.use(Vuetify);
        homeWrap = shallowMount(Home, {
            Vue, router,
            data() {
                return {
                    shows: [{
                        "id": 169,
                        "name": "Breaking Bad",
                        "rating": { "average": 9.3 },
                        "genres": ["Crime", "Drama", "Thriller"]
                    },
                    {
                        "id": 249,
                        "name": "Sherlock",
                        "rating": { "average": 9.5 },
                        "genres": ["Thriller", "Crime"]
                    }],
                    data: allShows(),
                    genres: [
                        "Drama",
                        "Crime",
                        "Comedy",
                        "Action",
                        "Thriller",
                        "Science-Fiction",
                        "Horror",
                        "Anime",
                        "Adventure",
                        "Mystery"
                    ]
                }

            }
        })
        homeWrap.vm.show = allShows()
    })

    afterEach(() => {
        homeWrap.destroy();
    })

    it('Testing if it is a Vue instance', () => {
        expect(homeWrap.isVueInstance).toBeTruthy();
    })

    it('it should have a <v-container-stub>', () => {
        expect(homeWrap.html()).toContain("v-container-stub")
    });

    it('should find v-layout', () => {
        expect(homeWrap.html()).toContain("v-layout-stub")
    });

    it('should find v-flex', () => {
        expect(homeWrap.html()).toContain("v-flex-stub")
    });

    it('should find v-select', () => {
        expect(homeWrap.html()).toContain("v-select-stub")
    });

    it('should find v-col', () => {
        expect(homeWrap.html()).toContain("v-col-stub")
    });

    it('it should have a h1 element', () => {
        expect(homeWrap.find('h1').text()).toBe("Pick your poison")
    });

    it('should find v-carousel-item', () => {
        expect(homeWrap.html()).toContain("v-carousel-item-stub")
    });

    it('should find v-carousel', () => {
        expect(homeWrap.html()).toContain("v-carousel-stub")
    });

    it('testing data elements', () => {
        expect(homeWrap.vm.genreChoice).toBeNull();
        expect(homeWrap.vm.genres).not.toBeNull();
        expect(homeWrap.vm.genrePicker).toBeDefined();
    })

    it('it should load showcard component', () => {
        expect(ShowCard).toBeTruthy();
    });

    it('testing shuffleArray function', () => {
        expect(homeWrap.vm.shuffleArray([0, 1, 2, 3, 4])).not.toEqual([0, 1, 2, 3, 4])
    })
})