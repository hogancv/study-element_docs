<script setup>
import { ref } from "vue";
import {Input,Icon} from "study-element";
const test = ref("");
</script>
<template>
  <Input v-model="test" placeholder="prepend append">
    <template #prepend>Https://</template>
    <template #append>.com</template>
  </Input>
  <div :style="{ margin: '20px 0' }"></div>
  <Input v-model="test" placeholder="prefix suffix">
    <template #prefix>
      <Icon icon="fa-user" />
    </template>
    <template #suffix>
      <Icon icon="fa-user" />
    </template>
  </Input>
</template>
