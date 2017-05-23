var Notice = {}

Notice.install = function(Vue, options) {
    let opt = {
        defaultType: 'default', //默认显示位置
        duration: null //持续时间
    }

    //使用传入的配置
    for (let prop in options) {
        opt[prop] = options[prop]
    }

    Vue.prototype.$notice = (data, type) => {
        // 如果传了type，则使用该type
        if (type) {
            opt.defaultType = type
        }

        // 1.创建构造器，定义好提示信息的模板
        let noticeTpl = Vue.extend({
            template: `<div class="vue-notice-wrapper vue-notice-${opt.defaultType} slideInRight">
                            <div class="vue-notice-header">
                                <div class="vue-notice-title">${data.title}</div>
                                <div class="vue-notice-actions">
                                    <i class="iconfont icon-check" title="标记已读"></i>
                                    <i class="iconfont icon-time" title="稍后处理"></i>
                                    <i class="iconfont icon-close" title="关闭" @click="close"></i>
                                </div>
                            </div>
                            <div class="vue-notice-body">${data.desc}</div>
                        </div>`
        })

        // 2.创建实例，挂载到文档以后的地方
        let tpl = new noticeTpl().$mount().$el

        // 3.把实例添加到body中
        document.body.appendChild(tpl)

        // 4.如果设置了移除时间，则延时移除
        if (opt.duration) {
            setTimeout(function() {
                document.body.removeChild(tpl)
            }, opt.duration)
        }
    }

    ['info', 'success', 'warning', 'error'].forEach(type => {
        Vue.prototype.$notice[type] = (data) => {
            return Vue.prototype.$notice(data, type)
        }
    })
}

module.exports = Notice
