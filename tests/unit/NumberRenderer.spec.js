import { mount } from "@vue/test-utils";
import NumberRenderer from "@/components/NumberRenderer.vue";

describe("NumberRenderer.vue", () => {
    it("renders even numbers", () => {
        const wrapper = mount(NumberRenderer, {
            props: {
                even: true
            }
        })
        expect(wrapper.text()).toBe("2, 4, 6, 8")
    })
    it("renders even numbers", () => {
        const localThis = { even: false }
        expect(NumberRenderer.computed.numbers.call(localThis)).toBe("1, 3, 5, 7, 9")
    })
})
//Call vs mount
//Call can be useful when
//1) You are testing a component that does some time consuming operations in a lifecycle methods you would like to avoid executing in your computed unit test.
//2) You want to stub out some values on this. Using call and passing a custom context can be useful.
//computed properties can be using mount making assertions on the rendered markup
// complex computed properties can be independently tested by using call