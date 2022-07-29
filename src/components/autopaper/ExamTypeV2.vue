<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input :value="modelValue" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password1"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password :value="modelValue" />
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Next</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
/* eslint-disable */

import { defineComponent, reactive } from 'vue';
export default {
  props:{
     modelValue: {
                type: String,
            },

  },
  computed:{
            value:{
               get(){
                return this.modelValue;
               },
               set(value){
                console.log("value",value);
                this.$emit('update:modelValue', value)
               }
            }
        },
    data() {
    return {
      formState: { username: '', password: '' },
      currentStep: 0,
    };
  },
  emits: ['save-data'],
  methods: {
    onFinish(values) {
      // eslint-disable-next-line no-console
      console.log('onFinish');
      // eslint-disable-next-line no-console
      const stepData={...values}
      localStorage.setItem('step1',JSON.stringify(stepData))
      this.$emit('save-data', { ...values, step: this.currentStep + 1 });
    },
    onFinishFailed(errorInfo) {
      // eslint-disable-next-line no-console
      console.log(errorInfo);
    },
  },
  mounted(){
    console.log("mounted.....");

     let data=JSON.parse(localStorage.getItem('step1'));
     console.log(data.username);
     this.formState={...data}

  }
};
</script>