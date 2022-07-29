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
    <a-form-item label="Section Title" name="section">
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Instructions for this section."
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input v-model:value="formState.password" placeholder="Please type instructions" />
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="button">Add New Section</a-button>
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
  data() {
    return {
      formState: { username: '', password: '' },
      currentStep: 1,
    };
  },
  emits: ['save-data'],
  methods: {
    onFinish(values) {
      // eslint-disable-next-line no-console
      console.log('onFinish');
      // eslint-disable-next-line no-console
      const stepData = { ...values };
      localStorage.setItem('step1', JSON.stringify(stepData));
      this.$emit('save-data', { ...values, step: this.currentStep + 1 });
    },
    onFinishFailed(errorInfo) {
      // eslint-disable-next-line no-console
      console.log(errorInfo);
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
  mounted() {
    // console.log('mounted.....');
    // let data = JSON.parse(localStorage.getItem('step1'));
    // this.formState = { ...data };
  },
};
</script>