import About from '@/views/About.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify'
import { routes } from '@/router/index';
import VueRouter from 'vue-router'
import { show } from '../returnShows'

describe('Testing Header.vue', () => {
    let aboutWrap;
    const localVue = createLocalVue();
    const router = new VueRouter({ routes });

    beforeEach(() => {
        localVue.use(Vuetify);
        aboutWrap = shallowMount(About, { localVue, router })
        aboutWrap.vm.show = show();
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
})