<template>
	<h1 v-html="msg"></h1>
	<input v-model="newItem" @keyup.enter="addNew">
	<ul>
	  <li 
	  	v-for="item in items" 
	  	:class="[list,{finished: item.isFinished}]" 
	  	@click="toggleFinish(item)"
	  >
	  	<button @click="del(item)">delete!</button>
	    {{item.label}}   
	  </li>
	</ul>
</template>

<script>
	import Store from '../store';
	export default {
	  data: function () {
	    return {
	      msg: "this is a todo list",
	      items: Store.fetch(),
	      newItem: '',
	      list: 'list'
	    } 
	  },
	  methods: {
	    toggleFinish: function (item) {
	      item.isFinished = !item.isFinished;
	    },
	    addNew: function () {
	      this.items.push({
	        label: this.newItem,
	        isFinished: false
	      })
	      this.newItem = '';
	    },
	    del: function(item) {
	      for(var i=0;i<this.items.length;i++){
	        if(this.items[i].label === item.label){
	          this.items.splice(i,1);
	        }
	      }
	    }
	  },
	  watch: {
	    items: {
	      handler: function (items) {
	        Store.save(items);
	      },
	      deep: true
	    }
	  }
	}
</script>

<style>
	.list{
		margin: 5px 0;
		cursor: pointer;
	}
	.finished{
	  text-decoration: line-through;
	}
	input{
		display: block;
		margin: 0 auto;
	}
	button{
		margin-left: 20px;
		padding: 5px 7px;
		background: rgb(221, 221, 221);
		border: none;
		border-radius: 3px;
		outline: none;
	}
	.list::selection,button::selection{
		background: transparent;
	}
</style>