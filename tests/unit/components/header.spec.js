import AppHeader from '@/components/Header.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify'

describe('Testing Header.vue', () => {
    let headWrap;
    const localVue = createLocalVue();

    beforeEach(() => {
        localVue.use(Vuetify);
        headWrap = shallowMount(AppHeader, { localVue })
    })

    afterEach(() => {
        headWrap.destroy();
    })

    it('Testing if it is a Vue instance', () => {
        expect(headWrap.isVueInstance).toBeTruthy();
    })

    it('it should have a <v-app-bar-stub>', () => {
        expect(headWrap.html()).toContain("v-app-bar-stub")
    });

    it('should find v-toolbar-title', () => {
        expect(headWrap.html()).toContain("v-toolbar-title-stub")
    });

    it('it should have a <v-spacer-stub>', () => {
        expect(headWrap.html()).toContain("v-spacer-stub")
    });

    it('test existence of vbtns', () => {
        let btn1 = headWrap.find('.primary');
        expect(btn1.exists()).toBe(true);
        let btn2 = headWrap.find('.btn-1');
        expect(btn2.exists()).toBe(true);
    });

    it('should find v-toolbar-title', () => {
        expect(headWrap.html()).toContain("v-toolbar-title-stub")
    });

    it('should find v-icon', () => {
        expect(headWrap.html()).toContain("v-icon-stub")
    });

    it('it should have a span element', () => {
        expect(headWrap.find('span').text()).toBe("Search for a Show")
    });
})