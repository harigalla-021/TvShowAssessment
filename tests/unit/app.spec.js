import App from '@/App'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import AppFooter from '@/components/Footer.vue'
import AppHeader from '@/components/Header.vue'


describe('Testing App.vue', () => {
    let appWrap;
    const localVue = createLocalVue();

    beforeEach(() => {
        localVue.use(Vuetify);
        appWrap = shallowMount(App, { localVue })
    })

    afterEach(() => {
        appWrap.destroy();
    })

    it(('Testing if App.vue is a Vue component'), () => {
        expect(appWrap.isVueInstance).toBeTruthy();
    })

    it(('Testing if it contains <header>'), () => {
        expect(appWrap.html()).toContain("header")
    })

    it(('Testing if it contains <v-content-stub>'), () => {
        expect(appWrap.html()).toContain("v-content-stub")
    })

    it(('Testing if it contains <footer>'), () => {
        expect(appWrap.html()).toContain("footer")
    })

    it('it should load AppHeader', () => {
        expect(AppHeader).toBeTruthy();
    });

    it('it should load AppFooter', () => {
        expect(AppFooter).toBeTruthy();
    });

})