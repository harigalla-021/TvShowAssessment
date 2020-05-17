import Search from '@/views/Search.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify'
import { routes } from '@/router/index';
import VueRouter from 'vue-router'


describe('Testing Header.vue', () => {
    let searchWrap;
    const localVue = createLocalVue();
    const router = new VueRouter({ routes });
    const searchShows = jest.fn();

    beforeEach(() => {
        localVue.use(Vuetify);
        searchWrap = shallowMount(Search, {
            localVue, router, methods: {
                searchShows() { }
            }
        })
    })

    afterEach(() => {
        searchWrap.destroy();
    })

    it('Testing if it is a Vue instance', () => {
        expect(searchWrap.isVueInstance).toBeTruthy();
    })

    it('Testing vbtn', () => {
        searchWrap.find('.yellow').trigger("click");
        expect(searchShows).not.toHaveBeenCalled();
    })

    it('Testing search box', ()=>{
        var text = searchWrap.find('.text-1')
        text.setValue('peaky');
        expect(searchWrap.vm.search).toBe('peaky')
      })

})