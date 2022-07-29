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
      name="exampType"
      label="Exam Type"
    >
      <a-select
        ref="select"
        v-model:value="examType"
        style="width: 120px"
        @change="handleChange"
        placeholder="Please select exam type"
      >
        <a-select-option value="Annual Exam">Anual Exam</a-select-option>
        <a-select-option value="Quiz">Quiz</a-select-option>
      </a-select>
    </a-form-item>
     <a-form-item
      name="class"
      label="Class Level"
    >
      <a-select
        ref="select"
        v-model:value="examType"
        style="width: 120px"
        @change="handleChange"
        placeholder="Please select class level"
      >
        <a-select-option value="Annual Exam">10th </a-select-option>
        <a-select-option value="Quiz">9th</a-select-option>
        <a-select-option value="Quiz">8th</a-select-option>
      </a-select>
    </a-form-item>
     <a-form-item
      name="subject"
      label="Subject"
    >
      <a-select
        ref="select"
        v-model:value="examType"
        style="width: 120px"
        @change="handleChange"
        placeholder="Please select exam type"
      >
        <a-select-option value="Annual Exam">Mathes </a-select-option>
        <a-select-option value="Quiz">Physics</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item
      label="Username"
      name="username"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
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
      currentStep: 0,
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