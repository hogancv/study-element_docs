<template>
  <div class="container">
    <div>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
    </div>
    <div>
      <Button plain>Plain</Button>
      <Button plain type="primary">Primary</Button>
      <Button plain type="success">Success</Button>
      <Button plain type="info">Info</Button>
      <Button plain type="warning">Warning</Button>
      <Button plain type="danger">Danger</Button>
    </div>
    <div>
      <Button>Default</Button>
      <Button round type="primary">Primary</Button>
      <Button round type="success">Success</Button>
      <Button round type="info">Info</Button>
      <Button round type="warning">Warning</Button>
      <Button round type="danger">Danger</Button>
    </div>
  </div>
</template>
<script setup>
import { Button } from 'study-element';
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
