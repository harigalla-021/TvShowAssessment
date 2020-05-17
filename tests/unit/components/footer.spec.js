import AppFooter from '@/components/Footer.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify'

describe('Testing Footer.vue', () => {
    let footerWrap;
    const localVue = createLocalVue();

    beforeEach(() => {
        localVue.use(Vuetify);
        footerWrap = shallowMount(AppFooter, { localVue })
    })

    afterEach(() => {
        footerWrap.destroy();
    })

    it('Testing if it is a Vue instance', () => {
        expect(footerWrap.isVueInstance).toBeTruthy();
    })

    it('it should have a <v-footer-stub>', () => {
        expect(footerWrap.html()).toContain("v-footer-stub")
    });

    it('should find v-col-stub', () => {
        expect(footerWrap.html()).toContain("v-col-stub")
    });

    it('it should have a strong tag', () => {
        expect(footerWrap.find('strong').text()).toBe("TvShows Page")
    });
})