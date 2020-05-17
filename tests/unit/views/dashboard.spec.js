import Home from '@/views/Dashboard.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify'
import { routes } from '@/router/index';
import VueRouter from 'vue-router'
import { allShows } from '../returnShows'

describe('Testing Header.vue', () => {
    let homeWrap;
    const localVue = createLocalVue();
    const router = new VueRouter({ routes });

    beforeEach(() => {
        localVue.use(Vuetify);
        homeWrap = shallowMount(Home, { localVue, router })
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

    it('it should have a h1 element', () => {
        expect(homeWrap.find('h1').text()).toBe("A few popular shows for you")
    });

    it('testing shuffleArray function', ()=> {
        expect(homeWrap.vm.shuffleArray([0,1,2,3,4])).not.toEqual([0,1,2,3,4])
    })
})