import Search from '@/views/Search.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify'
import { routes } from '@/router/index';
import VueRouter from 'vue-router'


describe('Testing Header.vue', () => {
    let searchWrap;
    const localVue = createLocalVue();
    const router = new VueRouter({ routes });

    beforeEach(() => {
        localVue.use(Vuetify);
        searchWrap = shallowMount(Search, {
            localVue, router
        })
    })

    afterEach(() => {
        searchWrap.destroy();
    })

    it('Testing if it is a Vue instance', () => {
        expect(searchWrap.isVueInstance).toBeTruthy();
    })

    it('it should have a <v-container-stub>', () => {
        expect(searchWrap.html()).toContain("v-container-stub")
    });

    it('should find v-row', () => {
        expect(searchWrap.html()).toContain("v-row-stub")
    });

    it('should find v-text-field', () => {
        let field = searchWrap.find('.text-1')
        expect(field.exists()).toBe(true);
    });

})