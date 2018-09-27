<script>
import Vue from 'vue'
import Toast from './toast'

let instance = null
let timer = null
let onCloseCb = null

function notice (type, content, duration = 3, onClose, mask) {
  if (instance) {
    return
  }
  instance = new Vue({
    render: h => h(Toast, { props: { type, content, mask } })
  }).$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  onCloseCb = onClose
  if (duration === 0) {
    return
  }
  timer = setTimeout(() => {
    destroy()
  }, duration * 1000)
}

function destroy () {
  clearTimeout(timer)
  if (!instance) {
    return
  }
  instance.$children[0].visble = false
  setTimeout(() => {
    document.body.removeChild(instance.$el)
    instance = null
    onCloseCb && onCloseCb()
  }, 200)
}

export default {
  info (content, duration, onClose, mask) {
    return notice('info', content, duration, onClose, mask)
  },
  loading (content, duration, onClose, mask) {
    return notice('loading', content, duration, onClose, mask)
  },
  success (content, duration, onClose, mask) {
    return notice('success', content, duration, onClose, mask)
  },
  fail (content, duration, onClose, mask) {
    return notice('fail', content, duration, onClose, mask)
  },
  offline (content, duration, onClose, mask) {
    return notice('offline', content, duration, onClose, mask)
  },
  hide () {
    destroy()
  }
}
</script>
