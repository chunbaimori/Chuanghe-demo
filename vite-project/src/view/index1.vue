<script setup>
import {computed} from 'vue'

//表头数据
const columns = [
    {
      title: '文件名',
      key: 'name'
    },
    {
      title: '上传时间',
      key: 'time'
    },
    {
      title: '文件大小',
      key: 'size'
    },
    {
      title: '状态',
      key: 'state ',
      render: (_,el)=>{
        return `${data[el].state?'可用':'不可用'}`
      }
    }
]

//数据内容
const data =[
  { name: '测试数据', time: '测试数据',size: '测试数据',state:false },
  { name: '测试数据', time: '测试数据',size: '测试数据',state:false },
  { name: '测试数据', time: '测试数据',size: '测试数据',state:false },
  { name: '测试数据', time: '测试数据',size: '测试数据',state:false },
  { name: '测试数据', time: '测试数据',size: '测试数据',state:true }
]

//文件数量
const nums = computed(()=>data.length)

</script>

<template>
  <h1>文件数：{{nums}}个</h1>
   <n-data-table striped :columns="columns" :data="data" />
</template>

<style></style>