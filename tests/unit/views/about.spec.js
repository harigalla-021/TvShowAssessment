import About from '@/views/About.vue'
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue'
import Vuetify from 'vuetify'
import { routes } from '@/router/index';
import VueRouter from 'vue-router'
import { getShow } from '../returnShows'

describe('Testing Header.vue', () => {
    let aboutWrap;
    const router = new VueRouter({ routes });

    beforeEach(() => {
        Vue.use(Vuetify);
        aboutWrap = shallowMount(About, {
            Vue,
            router,
            data() {
                return {
                    show: getShow(),
                    crew: null
                }
            }
        })
        aboutWrap.vm.show = getShow();
        aboutWrap.vm.crew = aboutWrap.vm.show._embedded.cast;
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

    it('it should have a <v-rating-stub>', () => {
        expect(aboutWrap.html()).toContain("v-rating-stub")
    });

    it('should find v-icon', () => {
        expect(aboutWrap.html()).toContain("v-icon-stub")
    });

    it('it should have a strong element', () => {
        expect(aboutWrap.find('strong').text()).toBe("Official site:")
    });

    it('should find v-spacer', () => {
        expect(aboutWrap.html()).toContain("v-spacer-stub")
    });

    it('should find v-img', () => {
        expect(aboutWrap.html()).toContain("v-img-stub")
    });

    it('should find v-row', () => {
        expect(aboutWrap.html()).toContain("v-row-stub")
    });

    it('testing data elements', () => {
        expect(aboutWrap.vm.crew).toBeDefined();
        expect(aboutWrap.vm.crew).not.toBeNull();
    });

    it('testing function', () => {
        expect(aboutWrap.vm.displayShow).toBeDefined();
    });
})