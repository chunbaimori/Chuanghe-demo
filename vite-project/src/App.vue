<script setup>
import {ref}  from 'vue'
import { defineComponent, h } from "vue";
import { RouterLink } from 'vue-router'
const options = ref('')

//左侧导航
options.value = [
      {
        label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Index1',
          }
        },
        { default: () => '页面一' }
      ),
        key: "1"
      },
      {
        label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Index2',
          }
        },
        { default: () => '页面二' }
      ),
        key: "2"
      },
      {
        label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Index3',
          }
        },
        { default: () => '页面三' }
      ),
        key: "3"
      }
    ]
</script>

<template>
    <n-layout has-sider style="height:100vh">
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="120"
        :width="240"
        :show-collapsed-content="false"
        show-trigger="arrow-circle"
        content-style="padding: 24px;"
        bordered
      >
      <n-menu :options="options" style="width: 180px" default-value="1" />
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
</template>

<style scoped>
.n-layout{
  height:100%
}
.n-layout-sider{
  height:100%
}
</style>
