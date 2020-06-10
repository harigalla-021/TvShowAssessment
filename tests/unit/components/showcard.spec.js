import ShowCard from '@/components/Header.vue'
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify'
import { getShow } from '../returnShows'
import Vue from 'vue'

describe('Testing ShowCard.vue', () => {
    let cardWrap;


    beforeEach(() => {
        Vue.use(Vuetify)
        cardWrap = shallowMount(ShowCard, {
            Vue,
            propsData:
            {
                show: getShow()
            }
        })
    })

    afterEach(() => {
        cardWrap.destroy();
    })

    it('Testing if it is a Vue instance', () => {
        expect(cardWrap.isVueInstance).toBeTruthy();
    })


    it('it should have a <v-spacer-stub>', () => {
        expect(cardWrap.html()).toContain("v-spacer-stub")
    });


    it('it should have a <v-icon-stub>', () => {
        expect(cardWrap.html()).toContain("v-icon-stub")
    });

})