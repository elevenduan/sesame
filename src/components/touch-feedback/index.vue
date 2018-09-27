<script>
export default {
  name: 'TouchFeedback',
  data () {
    return {
      bind: false,
      events: {
        'touchstart': () => {
          this.change('touchstart')
        },
        'touchmove': () => {
          this.change('touchmove')
        },
        'touchend': () => {
          this.change('touchend')
        },
        'touchcancel': () => {
          this.change('touchcancel')
        },
        'mousedown': () => {
          this.change('mousedown')
        },
        'mouseup': () => {
          this.change('mouseup')
        },
        'mouseleave': () => {
          this.change('mouseleave')
        }
      }
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    activeClassName: {
      type: String,
      default: 'active'
    }
  },
  methods: {
    change: function (key) {
      let { $el: elm, activeClassName } = this
      switch (key) {
        case 'touchstart':
        case 'mousedown': {
          elm.classList.add(activeClassName)
          break
        }
        case 'touchmove':
        case 'touchend':
        case 'touchcancel':
        case 'mouseup':
        case 'mouseleave': {
          elm.classList.remove(activeClassName)
          break
        }
      }
    }
  },
  render () {
    const { $props: { disabled }, $slots: { default: els }, events } = this
    // 不存在子元素，或者子元素不唯一，或者子元素非标签类元素
    if (!els || els.length > 1 || !els[0].tag) {
      return
    }
    let el = els[0]

    this.$nextTick(() => {
      if (disabled && this.bind) {
        Object.keys(events).forEach((key) => {
          el.elm.removeEventListener(key, events[key])
        })
        this.bind = false
      } else if (!disabled && !this.bind) {
        Object.keys(events).forEach((key) => {
          el.elm.addEventListener(key, events[key])
        })
        this.bind = true
      }
    })

    return el
  }
}
</script>
