<script setup>
const props = defineProps({
  title: String,
  start: String,
  end: String,
  description: String,
  lastOne: Boolean,
});

const accordionContent = ref(null);
const opened = ref(false);

function toggleAccordion() {
  opened.value = !opened.value;

  if (opened.value) {
    accordionContent.value.style.height =
      accordionContent.value.scrollHeight + "px";
    accordionContent.value.style.marginTop = "10px";
    accordionContent.value.style.marginBottom = "10px";
  } else {
    accordionContent.value.style.height = "0px";
    accordionContent.value.style.marginTop = "0px";
    accordionContent.value.style.marginBottom = "0px";
  }
}
</script>

<template>
  <div class="accordion" :class="{ lastone: props.lastOne }">
    <div class="accordion-header" @click="toggleAccordion">
      <span class="title"> {{ props.title }} </span>
      <div class="date">
        <span>{{ props.start }}</span>
        <p class="divisor"></p>
        <span>{{ props.end }}</span>
      </div>
    </div>

    <div class="accordion-content" ref="accordionContent">
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  overflow: hidden;
  min-width: 150px;
  width: 100%;
  border-top: 1px solid #c8c8c8;
}

.lastone {
  border-bottom: 1px solid #c8c8c8;
}

.accordion .accordion-header {
  display: flex;
  min-height: 50px;
  padding: 30px 50px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.accordion .accordion-header .title {
  font-size: 24px;
  font-weight: 500;
  color: #000;
}

.accordion .accordion-header .date {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.accordion .accordion-header .date span {
  font-size: 18px;
  color: #000;
}

.accordion .accordion-header .date .divisor {
  height: 2px;
  width: 30px;
  background-color: black;
}

.accordion .accordion-content {
  padding: 0 50px;
  height: 0;
  transition: all 0.5s ease;
  color: #000;
}
</style>
