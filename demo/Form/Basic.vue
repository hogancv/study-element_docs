<template>
<div>
  <Form :model="model" ref="formRef">
    <FormItem prop="email" label="the email">
      <Input v-model="model.email" />
    </FormItem>
    <FormItem prop="password" label="the password">
      <Input v-model="model.password" type="password" />
    </FormItem>
    <FormItem prop="agreement" label="agreement">
      <Switch v-model="model.agreement" />
    </FormItem>
    <FormItem prop="zone" label="zone">
      <Select v-model="model.zone" :options="options" />
    </FormItem>
    <FormItem>
      <Button @click.prevent="submit" type="primary">Submit</Button>
      <Button @click.prevent="reset">Reset</Button>
    </FormItem>
  </Form>

  <p>
    form value:
    <pre>{{model}}</pre>
  </p>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Form , FormItem , Input , Button , Switch , Select } from 'study-element'

const model = reactive({
  email: '',
  password: '',
  confirmPwd: '',
  agreement: false,
  zone: ''
})

const options = [
  { label: 'zone 1', value: 'one' },
  { label: 'zone 2', value: 'two' },
  { label: 'zone 3', value: 'three' }
]
const formRef = ref()
const submit = async () => {
  alert('submitted!')
}
const reset = () => {
  formRef.value.resetFields()
}
</script>

<style>

</style>