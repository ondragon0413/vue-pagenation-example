import Vue from 'vue'
import Paginate from 'src/components/Paginate.vue'

describe('Paginate', () => {
  const Component = Vue.extend(Paginate)
  function initComponent() {
    return new Component({
      propsData: {
        pageCount: 10
      }
    }).$mount()
  }

  describe('Simple Cases', () => {
    it('success', () => {
      const vm = initComponent()
      expect(vm.$el.querySelector("li:first-child a").textContent).to.equal("Prev")
      expect(vm.$el.querySelector("li:last-child a").textContent).to.equal("Next")
      expect(vm.$el.querySelector(".active a").textContent).to.equal("1")
    })

    it('next and prev button event right', () => {
      const vm = initComponent()
      const nextButton = vm.$el.querySelector("li:last-child a")
      nextButton.click()

      Vue.nextTick(() => {
        expect(vm.$el.querySelector(".active a").textContent).to.equal("2")

        const prevButton = vm.$el.querySelector("li:first-child a")
        prevButton.click()

        Vue.nextTick(() => {
          expect(vm.$el.querySelector(".active a").textContent).to.equal("1")
        })
      })
    })

    it('prev button when first page', () => {
      const vm = initComponent()
      const prevButton = vm.$el.querySelector("li:first-child a")
      prevButton.click()

      Vue.nextTick(() => {
        expect(vm.$el.querySelector(".active a").textContent).to.equal("1")
      })
    })

    it('click page element', () => {
      const vm = initComponent()
      const pageItem = vm.$el.querySelector('li:nth-child(3) a')
      pageItem.click()
      Vue.nextTick(() => {
        expect(vm.$el.querySelector(".active a").textContent).to.equal("2")
      })
    })

    it('set initial page success', () => {
      const vm = new Component({
        propsData: {
          pageCount: 10,
          initialPage: 2
        }
      }).$mount()
      expect(vm.$el.querySelector(".active a").textContent).to.equal("2")
    })

    it('shows breakView', () => {
      const vm = initComponent()
      const breakViewIndex = vm.selected + vm.pageRange + 3
      expect(vm.$el.querySelector(`li:nth-child(${breakViewIndex})`).textContent).to.equal('...')
    })
  })

  describe('page range tests', () => {
    it('page count not more than range', () => {
      const vm = new Component({
        propsData: {
          pageCount: 5,
          pageRange: 5
        }
      }).$mount()
      expect(vm.$el.querySelectorAll("li a").length).to.equal(7)
    })

    it('has left part and right part', () => {
      const vm = initComponent()
      const selectedIndex = (vm.pageCount - vm.pageRange / 2) + 1
      vm.selected = selectedIndex
    })
  })
})
