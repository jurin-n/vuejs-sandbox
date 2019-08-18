import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    // Vue Test Utils導入前のコード
    // const Constructor = Vue.extend(HelloWorld)
    // const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //   .to.equal('Welcome to Your Vue.js App')

    // Vue Test Utils導入後のコード
    expect(mount(HelloWorld).find('.hello h1').text())
      .to.equal('Welcome to Your Vue.js App')
  })
})
