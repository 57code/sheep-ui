var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { getCurrentInstance, defineComponent, toRefs, computed, createVNode } from "vue";
const buttonProps = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
};
const CLASS_PREFIX = "s";
const GLOBAL_CONFIG_NAME = "_sheep";
const COMPONENT_PREFIX = "S";
const setGlobalConfig = (app, options = { classPrefix: CLASS_PREFIX }) => {
  var _a;
  app.config.globalProperties[GLOBAL_CONFIG_NAME] = __spreadProps(__spreadValues({}, (_a = app.config.globalProperties[GLOBAL_CONFIG_NAME]) != null ? _a : {}), {
    classPrefix: options.classPrefix
  });
};
const getComponentPrefix = (options) => {
  var _a;
  return (_a = options == null ? void 0 : options.componentPrefix) != null ? _a : COMPONENT_PREFIX;
};
const getComponentCls = (componentName) => {
  var _a, _b;
  const instance = getCurrentInstance();
  const prefix = (_b = (_a = instance == null ? void 0 : instance.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]) == null ? void 0 : _a.classPrefix) != null ? _b : CLASS_PREFIX;
  if (componentName) {
    return `${prefix}-${componentName}`;
  }
  return prefix;
};
var Button = defineComponent({
  name: "Button",
  props: buttonProps,
  setup(props, {
    slots
  }) {
    const {
      type,
      size,
      disabled,
      block
    } = toRefs(props);
    const prefixCls = getComponentCls("btn");
    const classes = computed(() => [prefixCls, `${prefixCls}--${type.value}`, `${prefixCls}--${size.value}`, {
      [`${prefixCls}--block`]: block.value
    }]);
    return () => {
      const defaultSlot = slots.default ? slots.default() : "\u6309\u94AE";
      return createVNode("button", {
        "disabled": disabled.value,
        "class": classes.value
      }, [defaultSlot]);
    };
  }
});
function installComponent(app, component, options) {
  const componentPrefix = getComponentPrefix(options);
  const registered = app.component(componentPrefix + component.name);
  if (!registered) {
    setGlobalConfig(app, options);
    app.component(componentPrefix + component.name, component);
  }
}
var ButtonPlugin = {
  install(app, options) {
    installComponent(app, Button, options);
  }
};
const installs = [ButtonPlugin];
var entry = {
  install(app) {
    installs.forEach((p) => app.use(p));
  }
};
export { Button, entry as default };
