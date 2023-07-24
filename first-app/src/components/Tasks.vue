<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="task-list" :key="task.id" v-for="task in tasks">
        <SingleTask @delete-task="$emit('delete-task', task.id)" :task="task"></SingleTask>
    </div>0
</template>

<script>
import SingleTask from './SingleTask.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Tasks",
    props: ["tasks"],
    components: { SingleTask },
    emits: ["delete-task"]
}
</script>

<style scoped></style>